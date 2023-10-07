'use client';

import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { DivResp } from './Main';

const StyledMain2 = styled(Grid)(({ theme }) => ({
    background: "#FFF",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
}));
const Title = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "30px",
    color: "#011A45",
    lineHeight: "normal",
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
        fontSize: "40px",
        width: "90%",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "45px",
        textAlign: "left",
    }
}));
const Description = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    color: "#011A45",
    lineHeight: "28px",
    width: "100%",
    textAlign: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        width: "90%",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "24px",
        textAlign: "left",
        lineHeight: "35px",
    }
}));
const RedBox = styled('div')(({ theme }) => ({
    width: "100%",
    position: "relative",
    display: "inline-block",
    '&::before': {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "160px solid #A22023",
        borderLeft: "50px solid transparent",
    }
}));
const Space = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(7),
    }
}));
const SpaceText = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(10),
        top: theme.spacing(2.5)
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(10),
        top: theme.spacing(1)
    }
}));
const TitleRedBox = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "18px",
    color: "#FFF",
    lineHeight: "normal",
    textDecorationLine: "underline",
    paddingLeft: theme.spacing(10),
    position: "relative",
    [theme.breakpoints.up('sm')]: {
        fontSize: "22px",
        top: theme.spacing(1.5)
    },
    [theme.breakpoints.up('md')]: {
        lineHeight: "50px",
        fontSize: "30px",
        top: theme.spacing(0.5)
    }
}));
const TextRedBox = styled(Typography)(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    color: "#FFF",
    lineHeight: "normal",
    [theme.breakpoints.up('sm')]: {
        fontSize: "17px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "20px",
        lineHeight: "30px",
    }
}));

export default function Main2() {

    return (
        <StyledMain2 container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
                <DivResp>
                    <Title>WE HELP YOU SCORE 700+ ON THE GMAT WITHIN 6 WEEKS</Title>
                    <br />
                    <Description>
                        The key to mastering the GMAT and reach your target score
                        is to identify your weaknesses and turn them into your strengths.
                        A personal coach will help you do just that and in a short amount
                        of time you can be ready to ace the test and unlock your business school success.
                    </Description>
                </DivResp>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RedBox>
                    <TitleRedBox>200-HOUR GMAT PREPARATION</TitleRedBox>
                    <SpaceText>
                        <PlayArrowIcon style={{ color: "#FFF" }} />&nbsp;<TextRedBox>QUANT AND DATA INSIGHTS TRICKS</TextRedBox>
                    </SpaceText>
                    <SpaceText>
                        <PlayArrowIcon style={{ color: "#FFF" }} />&nbsp;<TextRedBox>VERBAL LOGIC</TextRedBox>
                    </SpaceText>
                    <SpaceText>
                        <PlayArrowIcon style={{ color: "#FFF" }} />&nbsp;<TextRedBox>ALL TEST CONCEPTS AND TONS OF PRACTICE TESTS</TextRedBox>
                    </SpaceText>
                </RedBox>
                <Space />
                <RedBox>
                    <TitleRedBox>24/7 PERSONAL COACH AVAILABILITY</TitleRedBox>
                    <SpaceText>
                        <PlayArrowIcon style={{ color: "#FFF" }} />&nbsp;<TextRedBox>STRATEGY SESSIONS</TextRedBox>
                    </SpaceText>
                    <SpaceText>
                        <PlayArrowIcon style={{ color: "#FFF" }} />&nbsp;<TextRedBox>PERFORMANCE REVIEW SESSIONS</TextRedBox>
                    </SpaceText>
                    <SpaceText>
                        <PlayArrowIcon style={{ color: "#FFF" }} />&nbsp;<TextRedBox>QUESTIONS & ANSWERS</TextRedBox>
                    </SpaceText>
                </RedBox>
                <Space />
                <RedBox>
                    <TitleRedBox>DATA ANALYTICS TO MONITOR PROGRESS</TitleRedBox>
                    <SpaceText>
                        <PlayArrowIcon style={{ color: "#FFF" }} />&nbsp;<TextRedBox>ACCURACY RATE BY QUESTION TYPE AND CONCEPT</TextRedBox>
                    </SpaceText>
                    <SpaceText>
                        <PlayArrowIcon style={{ color: "#FFF" }} />&nbsp;<TextRedBox>TURN WEAKNESSES INTO STRENGHTS TO SCORE 600+</TextRedBox>
                    </SpaceText>
                    <SpaceText>
                        <PlayArrowIcon style={{ color: "#FFF" }} />&nbsp;<TextRedBox>REINFORCE CORE AND NEW STRENGHTS TO SCORE 700+ </TextRedBox>
                    </SpaceText>
                </RedBox>
                <br />
                <br />
                <br />
            </Grid>
        </StyledMain2>
    )
}
