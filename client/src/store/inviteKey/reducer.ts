import { ADD_INVITE_KEY, CLEAR_INVITE_KEYS, InviteKeysAction } from './types';
import { initialState } from '../rootReducer';

const inviteKeysReducer = (state = initialState.inviteKeys, action: InviteKeysAction): string[] => {
  switch (action.type) {
    case ADD_INVITE_KEY:
      return state.concat(action.payload);
    case CLEAR_INVITE_KEYS:
      return initialState.inviteKeys;
    default:
      return state;
  }
};

export default inviteKeysReducer;
