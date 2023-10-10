'use client';

import React from 'react'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Senior from '@/assets/seniortasse.png'
import { useRouter } from "next/navigation";

const StyledMain = styled(Grid)(({ theme }) => ({
    background: "#011A45",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
}));
const StyledImg = {
    width: "320px",
    height: "430px",
    border: "2px solid #FFF",
}
const GMAT = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    color: "#FFF",
    lineHeight: "normal",
    textAlign: "center",
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        fontSize: "50px",
        textAlign: "justify",
        width: "90%"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "65px",
        textAlign: "center",
        width: "100%"
    }
}));
const SubTitle = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    color: "#FFF",
    lineHeight: "normal",
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
        fontSize: "16px",
        textAlign: "justify",
        width: "90%"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "18px",
        textAlign: "center",
        width: "100%"
    }
}));
const Bio = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    color: "#FFF",
    lineHeight: "25px",
    textAlign: "center",
    width: "90%",
    [theme.breakpoints.up('sm')]: {
        fontSize: "18px",
        textAlign: "justify",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "20px",
        textAlign: "left",
        width: "98%"
    }
}));
const Pub = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    color: "#FFF",
    lineHeight: "30px",
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
        fontSize: "23px",
        width: "90%"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "25px",
        lineHeight: "40px",
        width: "100%"
    }
}));
const Space = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
}));
const SpaceT = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(0.75),
    marginBottom: theme.spacing(0.75),
}));
const Price = styled('div')(({ theme }) => ({
    display: "flex",
    width: "300px",
    height: "300px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "150px",
    border: "2px solid #FFF",
    background: "#A22023",
    marginTop: theme.spacing(3),
}));
const P2Box = styled('div')(({ theme }) => ({
    borderTop: "2px solid #FFF",
    borderBottom: "2px solid #FFF",
    background: "#011A45",
    width: "300px",
    borderRadius: "6px",
}));
const P1Text = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "24px",
    color: "#FFF",
    lineHeight: "normal",
    textAlign: "center",
    [theme.breakpoints.up('md')]: {
    }
}));
const P2Text = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "27px",
    color: "#FFF",
    lineHeight: "35px",
    textAlign: "center",
    [theme.breakpoints.up('md')]: {
    }
}));
const GmatColor = styled('span')(({ theme }) => ({
    color: "#F7931E",
}));
export const DivResp = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
}));

export default function Main() {
    const router = useRouter()
    return (
        <StyledMain container justifyContent="center" alignItems="center">
            <Grid item container xs={12} sm={6} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={12} md={6}>
                    <DivResp>
                        <Image
                            src={Senior}
                            alt="SeniorTasse"
                            style={StyledImg}
                            priority={true}
                        />
                    </DivResp>

                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <DivResp>
                        <Price>
                            <P1Text>
                                6-week <GmatColor>Private</GmatColor><br />
                                Tutoring: <GmatColor>$495</GmatColor>
                            </P1Text>
                            <SpaceT />
                            <P2Box>
                                <P1Text>
                                    Start with a 1-Hour
                                </P1Text>
                                <P2Text>
                                    <GmatColor>Free</GmatColor> Consultation
                                </P2Text>
                            </P2Box>
                            <SpaceT />
                            <P1Text>
                                4-week <GmatColor>Private</GmatColor><br />
                                Tutoring: <GmatColor>$595</GmatColor>
                            </P1Text>

                        </Price>
                    </DivResp>

                </Grid>

            </Grid>
            <Grid item xs={12} sm={6}>
                <DivResp>
                    <GMAT><GmatColor>GMAT</GmatColor> WITH SENIORTASSE</GMAT>

                    <SubTitle>A personalized GMAT prep for the high achiever who needs a coach to reach their goal faster</SubTitle>
                    <Space />
                    <Bio>
                        Seniortasse is a private tutor for the GMAT and the GMAT Focus Edition.
                        He is also a puzzle creator who has authored over 100 Sudoku, Word Search, and
                        Crosswords puzzle books available on <span style={{ textDecorationLine: "underline", cursor: "pointer" }} onClick={() => router.push("https://www.contextionary.com/en")}>www.contextionary.com</span>. One of his
                        proudest achievements to date is having the third best-selling Sudoku book in
                        North America. His passion is to grow others and make them discover and reach their full potential.
                    </Bio>
                    <Space />
                    <Pub>
                        Use your time wisely. Prepare your <GmatColor>GMAT</GmatColor> with<br />
                        a <GmatColor>TOP 10 GMAT TEST TAKER</GmatColor> who went to<br />
                        a <GmatColor>TOP 10 BUSINESS SCHOOL</GmatColor> and graduated<br />
                        in the <GmatColor>TOP 10</GmatColor> of his <GmatColor>MBA CLASS</GmatColor>
                    </Pub>
                </DivResp>

            </Grid>
        </StyledMain>
    )
}
