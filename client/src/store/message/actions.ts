import { ShowMessage, CloseMessage, SHOW_MESSAGE, CLOSE_MESSAGE } from './types';

export const showMessage = (
  content: string,
  confirmFunction?: undefined | Function
): ShowMessage => ({
  type: SHOW_MESSAGE,
  payload: { open: true, content, confirmFunction: confirmFunction ?? null },
});
export const closeMessage = (): CloseMessage => ({ type: CLOSE_MESSAGE });
