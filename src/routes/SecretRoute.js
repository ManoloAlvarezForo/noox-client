import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants'
import MiniDrawer from '../components/MiniDrawer/MiniDrawer'

function isAuthenticated() {
    return localStorage.getItem(AUTH_TOKEN) ? true : false;
}

export const SecretRoute = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => (
            isAuthenticated() === true
            ? <MiniDrawer body={<Component {...props} />}/>
            : <Redirect to="/login" />
        )} />
    )
}
