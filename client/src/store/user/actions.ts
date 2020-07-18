import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { showMessage } from '../Message/actions';
import { ShowMessage } from '../Message/types';

import { State } from '../rootReducer';
import {
  LoginFailure,
  LoginSuccess,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  Logout,
  User,
  UserAction,
} from './types';

const loginSuccess = (data: User): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginFailure = (error: any): LoginFailure => {
  console.error(error);
  alert(error);
  return { type: LOGIN_FAILURE };
};

export const logout = (): Logout => ({ type: LOGOUT });

export const login = (
  email: string,
  password: string
): ThunkAction<Promise<void>, State, undefined, UserAction | ShowMessage> => (dispatch) => {
  return axios
    .post('/api/user/login', { username: email, password })
    .then(({ data }) => {
      if (data.success) {
        dispatch(showMessage(data.status));
        dispatch(loginSuccess({ email, name: data.name, token: data.token }));
      }
    })
    .catch((err) => {
      dispatch(loginFailure(err));
    });
};
