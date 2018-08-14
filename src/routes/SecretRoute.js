import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants'
import SideNav from '../components/MiniDrawer/SideNav'

function isAuthenticated() {
    return localStorage.getItem(AUTH_TOKEN) ? true : false;
}

export const SecretRoute = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => (
            isAuthenticated() === true
            ? <SideNav body={<Component {...props} />}/>
            : <Redirect to="/login" />
        )} />
    )
}
