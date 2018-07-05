import { SET_TITLE } from '../actions/title';

export default function title(state = 'Default Title', action) {
  switch (action.type) {
    case SET_TITLE:
      return state = action.title;
    default:
      return state;
  }
}
