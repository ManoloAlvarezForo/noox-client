import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../../containers/Login/LoginPage'
import { SecretRoute } from '../SecretRoute'
import DashboardsPage from '../../containers/Dashboards/DashboardsPage';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'

describe('Routes test', () => {
    test('Login render', ()=> {
        const loginWrapper = mount(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            </BrowserRouter>)
    })

    test('Dashboards render', ()=> {
        const dashboardWrapper = mount(
            <BrowserRouter>
                <Switch>
                    <SecretRoute exact path="/dashboards" component={DashboardsPage} />
                </Switch>
            </BrowserRouter>)
    })
})