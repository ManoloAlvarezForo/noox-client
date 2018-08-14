import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedDashboardSelect, {DashboardSelect} from '../DashboardSelect';
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer';


describe('<DashboardSelect />', () => {
    const dashboards = [
        { id: 1, name: 'Name', description: 'Description', widgets: [] }
    ]

    const initialState = {
        dashboardId: 1
    };

    const mockStore = configureStore();
    let container;
    let store;

    beforeEach(() => {
        store = mockStore(initialState)
        container = shallow(<ConnectedDashboardSelect store={store} dashboards={dashboards} />)
    })

    it('Render the connected(DashboardSelect) component', () => {
        expect(container.length).toEqual(1)
    });

    it('Checks dashboardId inital state', () => {
        expect(container.prop('dashboardId')).toEqual(initialState.dashboardId)
    });

    it('Checks dashboards', () => {
        expect(container.prop('dashboards')).toEqual(dashboards)
    });
})