export const DASHBOARD_SELECTED = 'DASHBOARD_SELECTED';

/**
 * Uses the dashboard id to set the selected dashboard.
 */
export const dashboardSelected = (dashboardId) => {
  return dispatch => {
    dispatch({
      type: DASHBOARD_SELECTED,
      dashboardId: dashboardId
    });
  };
}
