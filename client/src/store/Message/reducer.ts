import { SHOW_MESSAGE, CLOSE_MESSAGE, MessageAction, Message } from './types';
import { initialState } from '../rootReducer';

const messageReducer = (state = initialState.message, action: MessageAction): Message => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        open: true,
        message: action.payload.message,
        confirmFunction: action.payload.confirmFunction,
      };
    case CLOSE_MESSAGE:
      return initialState.message;
    default:
      return state;
  }
};

export default messageReducer;
