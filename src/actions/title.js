export const SET_TITLE = 'SET_TITLE';


export const setTitle = (title) => {
  return dispatch => {
    dispatch({
      type: SET_TITLE,
      title: title
    });
  };
}
