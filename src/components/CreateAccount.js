import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

import {
    LoginWrapper, LoginCard, StyledLink, LoginTitle,
    LoginSubtitle, LoginForm, InputLabel, LoginInput,
    Logo, ButtonBox, LoginButton
} from '../styling/LoginStyling';

const CreateAccount = (props) => {
    // state to handle new user infor
    const [ newUser, setNewUser ] = useState(
        {
            username: '',
            password: ''
        }
    );

    // function to handle user input change in forms
    const handleChange = (e) => {
        setNewUser(
            {
                ...newUser,
                [e.target.name]: e.target.value
            }
        )
    }

    // function to handle form submission and creates a new account
    const createAccount = (e) => {
        e.preventDefault();
        // will retrieve JWT token and add to local storage
        // route to protected ProfilePage component
        axiosWithAuth()
            .post(`/auth/register`, newUser)
            .then( res => {
                console.log(res);
                // update state with payload
                props.history.push('/')
            })
            .catch( err => console.log(err))
    }

    // render form to let user create a new account
    return (
        <LoginWrapper>
            <Logo>AR<br/>P.</Logo>
            <LoginCard>
                <LoginTitle>Create an Account</LoginTitle>
                <LoginForm>
                    <InputLabel>Username</InputLabel>
                    <LoginInput 
                        type="text" 
                        name="username"
                        value={newUser.username}
                        onChange={handleChange}
                    />
                    <InputLabel>Password</InputLabel>
                    <LoginInput 
                        type="password" 
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                </LoginForm>
                <ButtonBox>
                    <LoginButton onClick={() => props.history.push('/')}>Go Back</LoginButton>
                    <LoginButton onClick={createAccount}>Create Account</LoginButton>
                </ButtonBox>
            </LoginCard>
        </LoginWrapper>
    )
}

export default CreateAccount;