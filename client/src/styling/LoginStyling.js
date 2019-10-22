import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import loginBgImage from '../images/login-bg.jpg';

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
    background-image: url(${loginBgImage});
    background-repeat: no-repeat;
    background-size: 100%;
`;

export const LoginCard = styled.div`
    height: 537px;
    width: 510px;
    border-radius: 8px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${blueAccent};
    font-size: 1.4rem;
    font-weight: bold;
`;

export const LoginTitle = styled.h1`
    color: ${blackAccent};
    margin-top: 79px;
    font-size: 3.6rem;
`;

export const LoginSubtitle = styled.p`
    color: ${lightGray};
    font-size: 1.4rem;
    margin: 13px;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 381px;
    margin: 25px auto;
`;

export const InputLabel = styled.p`
    font-size: 1.2rem;
    color: ${blackAccent};
    font-weight: bold;
    margin-top: 20px;
`;

export const LoginInput = styled.input`
    font-size: 1.2rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${blackAccent};
    padding: 4px 0;
    margin: 4px 0;
`;

export const Logo = styled.div`
    width: 97px;
    text-align: center;
    padding: 24px 0;
    background-color: ${primaryRed};
    border: 3px solid white;
    color: white;
    font-size: 2.4rem;
    position: absolute;
    top: 25px;
    left: 25px;
`;

export const ButtonBox = styled.div`
    display: flex;
    width: 381px;
    justify-content: flex-end;
    margin: 40px 57px;
`;

export const LoginButton = styled.button`
    font-size: 1.2rem;
    padding: 8px 38px;
    border-radius: 20px;
    margin: 8px;
    border: 1px solid black;
    color: black;
    font-weight: bold;
    :hover {
        color: white;
        background-color: ${primaryRed};
    }
`;