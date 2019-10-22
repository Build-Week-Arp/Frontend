import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

const CreateAccount = (props) => {
    // state to handle new user infor
    const [ newUser, setNewUser ] = useState(
        {
            email: '',
            firstName: '',
            lastName: '',
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
            .post(`register`, newUser)
            .then( res => {
                /********THIS NEEDS TO BE UPDATED********/
                // update state with payload
                props.history.push('/')
            })
            .catch( err => console.log(err))
    }

    // render form to let user create a new account
    return (
        <div>
            <div>
                <h1>Create an Account</h1>
            </div>
            <form>
                <label>
                    Email Address
                    <input 
                        type="text" 
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    First Name
                    <input 
                        type="text" 
                        name="firstName"
                        value={newUser.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        type="text" 
                        name="lastName"
                        value={newUser.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="password" 
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default CreateAccount;