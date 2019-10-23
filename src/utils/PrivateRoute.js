import React from 'react';
import { Route, Redirect } from 'react-router-dom'

/*
* PrivateRoute Rules:
* 1. It has the same API as <Route />
* 2. It renders as <Route /> and passes all the props through it
* 3. It checks if the user is authenticated
*   - if they are, it renders the "component" prop
*   - if they aren't, it redirects the user to login
*/

const PrivateRoute = ({ component: Component, ...rest}) => {
    // component: Component is same as const Component = props.component
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/' />
                }
            }}
        />
    )
}

export default PrivateRoute;