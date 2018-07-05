export const DASHBOARD_SELECTED = 'DASHBOARD_SELECTED';


export const dashboardSelected = (dashboardId) => {
  return dispatch => {
    dispatch({
      type: DASHBOARD_SELECTED,
      dashboardId: dashboardId
    });
  };
}
