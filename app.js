const { parse } = require('url')
const next = require('next')
const fs = require('fs');
 
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 443
var http = require('http');
const https = require('https');

// Start the HTTPS server
const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/dreamthrough.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/dreamthrough.com/fullchain.pem'),
};

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  https.createServer(httpsOptions, async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
 
      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on https://${hostname}:${port}`)
    })
})