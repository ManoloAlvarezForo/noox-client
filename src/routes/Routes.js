import React from 'react';
import { Switch, Route } from 'react-router-dom'
import DevicesPage from '../containers/Devices/DevicesPage';
import LoginPage from '../containers/Login/LoginPage'
import DashboardsPage from '../containers/Dashboards/DashboardsPage'
import {SecretRoute} from '../routes/SecretRoute'
import Error404 from '../components/Error404/Error404'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <SecretRoute exact path="/dashboards" component={DashboardsPage} />
            <SecretRoute exact path="/devices" component={DevicesPage} />
            <SecretRoute exact path="/" component={DashboardsPage} />
            <Route component={Error404} />
        </Switch>
    )
}

export default Routes;