'use client';

import { Grid, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Grid)(({ theme }) => ({
    background: "#FFF8E7",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
}));

const TextFooter = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "15px",
    color: "#011A45",
    textAlign: "center",
    lineHeight: "normal",
    [theme.breakpoints.up('md')]: {
        fontSize: "18px",
    }
}));
const Tentee = styled('span')(({ theme }) => ({
    fontWeight: 700,
    color: "#F7931E",
}));

export default function Footer() {
    return (
        <StyledFooter container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <TextFooter>
                    GMAT® is a registered trademark of the Graduate Management Admission Council (GMAC).<br />
                    This website is not endorsed or approved by GMAC. ©2023
                </TextFooter>
                <br />
                <TextFooter>
                    Powered By : <Tentee>TENTEE GLOBAL</Tentee>
                </TextFooter>
            </Grid>

        </StyledFooter>
    )
}
