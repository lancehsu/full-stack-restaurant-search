import { ShowMessage, CloseMessage, SHOW_MESSAGE, CLOSE_MESSAGE } from './types';

export const showMessage = (
  message: string,
  confirmFunction: Function | null = null
): ShowMessage => ({
  type: SHOW_MESSAGE,
  payload: { open: true, message, confirmFunction },
});
export const closeMessage = (): CloseMessage => ({ type: CLOSE_MESSAGE });
