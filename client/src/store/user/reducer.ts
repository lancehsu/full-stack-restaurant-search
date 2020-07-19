import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, UserAction, User } from './types';
import { initialState } from '../rootReducer';

const userReducer = (state = initialState.user, action: UserAction): User => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGIN_FAILURE:
      return state;
    case LOGOUT:
      return initialState.user;
    default:
      return state;
  }
};

export default userReducer;
