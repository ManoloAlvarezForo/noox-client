// @flow
import { combineReducers } from 'redux';
import title from './title';
import dashboardId from './dashboard';

const rootReducer = combineReducers({
    title,
    dashboardId
});

export default rootReducer;
