import { AddInviteKey, ClearInviteKeys, ADD_INVITE_KEY, CLEAR_INVITE_KEYS } from './types';

export const addInviteKey = (key: string): AddInviteKey => ({
  type: ADD_INVITE_KEY,
  payload: key,
});
export const clearInviteKey = (): ClearInviteKeys => ({ type: CLEAR_INVITE_KEYS });
