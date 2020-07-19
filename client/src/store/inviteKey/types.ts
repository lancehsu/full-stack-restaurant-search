export const ADD_INVITE_KEY = 'ADD_INVITE_KEY';
export const CLEAR_INVITE_KEYS = 'CLEAR_INVITE_KEYS';
export type AddInviteKey = { type: typeof ADD_INVITE_KEY; payload: string };
export type ClearInviteKeys = { type: typeof CLEAR_INVITE_KEYS };
export type InviteKeysAction = AddInviteKey | ClearInviteKeys;
