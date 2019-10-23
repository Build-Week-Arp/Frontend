import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

import {
    LoginWrapper, LoginCard, StyledLink, LoginTitle,
    LoginSubtitle, LoginForm, InputLabel, LoginInput,
    Logo, ButtonBox, LoginButton
} from '../styling/LoginStyling';

/*
* This component lets user login.  If successful redirects to Profile Page.
* If user needs to create an account, will redirect to CreateAccount component
*/
const Login = (props) => {
    // state to manage user input for credentials
    const [ credentials, setCredentials ] = useState(
        {
            email: '',
            password: ''
        }
    )

    // function to handle user input change in forms
    const handleChange = e => {
        setCredentials(
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        )
    }

    // function to handle form submission
    const submitLogin = e => {
        e.preventDefault();
        // login to retrieve the JWT token
        // add the token to local storage
        // route to protected ProfilePage Component
        axiosWithAuth()
            .post(`/login`, credentials)
            .then( res => {
                /********THIS NEEDS TO BE UPDATED********/
                localStorage.setItem('token', res.data.payload);
                props.history.push(`/profile-page`);
            })
            .catch( err => console.log(err))
    }

    // render form to handle login input
    return (
        <LoginWrapper>
            <Logo>AR<br/>P.</Logo>
            <LoginCard>
                <LoginTitle>Sign In</LoginTitle>
                <LoginSubtitle>
                    Don't have an account?
                    <StyledLink to="/create-account">  Create Account</StyledLink>
                </LoginSubtitle>
                <LoginForm>
                    <InputLabel>Email Address</InputLabel>
                    <LoginInput 
                        type="text" 
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                    />
                    <InputLabel>Password</InputLabel>
                    <LoginInput 
                        type="password" 
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </LoginForm>
                <ButtonBox>
                    <LoginButton>Go Back</LoginButton>
                    <LoginButton>Sign In</LoginButton>
                </ButtonBox>
            </LoginCard>
        </LoginWrapper>
    )
}

export default Login;