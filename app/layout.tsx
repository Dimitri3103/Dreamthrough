import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dreamthrough - GMAT with SENIORTASSE',
  description: 'A personalized GMAT prep for the high achiever who needs a coach to reach their goal faster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logoContexionary.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
