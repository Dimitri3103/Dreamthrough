'use client';

import { Grid, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

const TextHeader = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "11px",
    color: "#011A45",
    lineHeight: "normal",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        fontSize: "14px",
        marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "16px",
    }
}));
const StyledHeader = styled(Grid)(({ theme }) => ({
    background: "#FFF8E7",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
}));

export default function Header() {
    return (

        <StyledHeader container alignItems="center">
            <Grid item xs={6} sm={6} md={3}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <MailOutlineIcon style={{ color: "#011A45" }} />
                    <Link href="mailto:gtasse@contextionary.com">
                        <TextHeader>
                            gtasse@contextionary.com
                        </TextHeader>
                    </Link>

                </div>

            </Grid>
            <Grid item xs={6} sm={6} md={3}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <WhatsAppIcon style={{ color: "#011A45" }} />
                    <Link href="https://wa.me/17347474294">
                        <TextHeader>
                            (+1) 734 747 4294
                        </TextHeader>
                    </Link>
                </div>
            </Grid>
        </StyledHeader>
    )
}
