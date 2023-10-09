'use client';

import React, { useRef } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { TextareaAutosize } from '@mui/base'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import emailjs from '@emailjs/browser';

const StyledContact = styled(Grid)(({ theme }) => ({
    background: "#011A45",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
}));
const TitleContact = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "30px",
    color: "#FFF",
    lineHeight: "normal",
    textAlign: "center",
    [theme.breakpoints.up('md')]: {
        fontSize: "50px",
    }
}));
const InputContact = styled('input')(({ theme }) => ({
    width: "85%",
    height: "40px",
    background: "#ffffff 0% 0% no-repeat padding-box",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: 500,
    color: "#000",
    marginTop: theme.spacing(1),
    boxShadow: "0px 1px 3px #00000012",
    border: "1px solid #E5E7EB",
    "&:focus": {
        boxShadow: "none !important",
        border: "1px solid #F7931E",
        outline: 0,
    },
    "&:hover": {
        border: "1px solid #F7931E",
    },
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        height: "55px",
        marginTop: theme.spacing(2),
        width: "100%",
    }
}));
const LabelText = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    color: "#FFF",
    lineHeight: "normal",
    textAlign: "center",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.up('md')]: {
        fontSize: "35px",
        textAlign: "left",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}));
const SubmitButton = styled(Button)(({ theme }) => ({
    fontStyle: "normal",
    fontSize: "18px",
    background: "#F7931E",
    borderRadius: "15px",
    fontWeight: 600,
    color: "#FFF",
    width: "50%",
    height: "55px",
    marginTop: theme.spacing(2),
    "&:hover": { background: "#F7931E" },
    [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(4),
    },
}));
const Space = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
}));
const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 85%;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: normal;
    padding: 12px;
    border-radius: 10px 10px 0 10px;
    &:hover {
      border-color: #F7931E;
    }
  
    &:focus {
        box-shadow: none !important;
        border: 1px solid #F7931E;
        outline: 0;
    }

    @media only screen and (min-width: 769px) {
        width: 100%;
    }
  `,

);
const DivResp = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('md')]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "start",
        alignItems: "start",
    }

}));
const FormResp = styled('form')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('md')]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "start",
        alignItems: "start",
    }

}));

export default function Form() {
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const form = useRef() as any;

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_u4wee9t', 'template_3xz393k', form.current, '9eC8qUBubZuTfmWDK')
            .then((result) => {
                setMsg("Thank you for contacting us. We will be back to you shortly!")
                setOpen(true)
            }, (error) => {
                setMsg(error.text)
                setOpen(true)
            });
        form.current.reset()
    };

    return (
        <StyledContact container justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <TitleContact>
                    HOW TO CONTACT US
                </TitleContact>
            </Grid>
            <Space />
            <Grid item xs={12} sm={8}>
                <DivResp>
                    <FormResp ref={form} onSubmit={sendEmail}>
                        <LabelText>Enter your email address:</LabelText>
                        <InputContact
                            type="email"
                            id="email"
                            name="user_email"
                            required
                        />
                        <LabelText>
                            If you have any queries about the service, please share them with us and receive a response within minutes (optional):
                        </LabelText>
                        <StyledTextarea
                            minRows={5}
                            name="message"
                            required
                        />
                        <SubmitButton type="submit">
                            SUBMIT
                        </SubmitButton>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-message"
                        >
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {msg}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Ok</Button>
                            </DialogActions>
                        </Dialog>
                    </FormResp>
                </DivResp>
            </Grid>
        </StyledContact>
    )
}
