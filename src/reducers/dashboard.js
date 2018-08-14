import { DASHBOARD_SELECTED } from '../actions/dashboard';

export default function dashboardId(state = 'none', action) {
  switch (action.type) {
    case DASHBOARD_SELECTED:
      return state = action.dashboardId;
    default:
      return state;
  }
}
