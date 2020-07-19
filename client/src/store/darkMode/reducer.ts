import { CHANGE_MODE, DarkModeAction } from './types';
import { initialState } from '../rootReducer';

const darkModeReducer = (state = initialState.darkMode, action: DarkModeAction): boolean => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.payload === undefined ? !state : action.payload;
    default:
      return state;
  }
};

export default darkModeReducer;
