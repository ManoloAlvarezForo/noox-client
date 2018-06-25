import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './containers/Login/LoginPage'
import HomePage from './containers/Home/HomePage'


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
        </Switch>
    )
}

export default Routes;