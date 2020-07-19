import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { showMessage } from '../message/actions';
import { ShowMessage } from '../message/types';

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

const loginFailure = (): LoginFailure => {
  return { type: LOGIN_FAILURE };
};

export const logout = (): Logout => ({ type: LOGOUT });

type LoginErrorData = {
  success: boolean;
  status: string;
  err: { name: string; message: string };
};
export const login = (
  email: string,
  password: string
): ThunkAction<Promise<void>, State, undefined, UserAction | ShowMessage> => (dispatch) => {
  return axios
    .post('/api/user/login', { username: email, password })
    .then(({ data }) => {
      if (data.success) {
        console.info(data.status);
        dispatch(loginSuccess({ email, name: data.name, token: data.token }));
      }
    })
    .catch(({ response }) => {
      const { data }: { data: LoginErrorData } = response;
      if (data.success === false) {
        dispatch(showMessage(`${data.status}: ${data.err.message}`));
      }

      dispatch(loginFailure());
    });
};
