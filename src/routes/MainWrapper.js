import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants'
const token = localStorage.getItem(AUTH_TOKEN);

function isAuthenticated() {
    return localStorage.getItem(AUTH_TOKEN)
}

const Main = ({props}) => {
    return(
        <div>
        MANUCHO
        </div>
    )
}

export const MainWrapper = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => (
            isAuthenticated()
            ? <Main {...props} />
            : <Redirect to="/login" />
        )} />
    )
}
