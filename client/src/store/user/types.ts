export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export type LoginSuccess = { type: typeof LOGIN_SUCCESS; payload: User };
export type LoginFailure = { type: typeof LOGIN_FAILURE };
export type Logout = { type: typeof LOGOUT };

export type UserAction = LoginSuccess | LoginFailure | Logout;

export type User = { name: string; account: string; token: string } | null;
