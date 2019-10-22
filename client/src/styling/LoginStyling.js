import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*===========COLOR SCHEME===========*/
const primaryRed = "#d12554";
const lightGray = "#787878";
const darkGray = "#404040";
const blueAccent = "#2D6CFF";
const blackAccent = "#000000";

/*===========LOGIN STYLES===========*/
export const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginCard = styled.div`
    height: 537px;
    width: 510px;
    border-radius: 6px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${blueAccent};
    font-size: 1.4rem;
    font-weight: bold;
`;

export const LoginTitle = styled.h1`
    color: ${blackAccent};
    margin-top: 100px;
    font-size: 3.6rem;
`;

export const LoginSubtitle = styled.p`
    color: ${lightGray};
    font-size: 1.4rem;
`;