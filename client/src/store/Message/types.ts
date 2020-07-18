export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';
export type ShowMessage = { type: typeof SHOW_MESSAGE; payload: Message };
export type CloseMessage = { type: typeof CLOSE_MESSAGE };
export type MessageAction = ShowMessage | CloseMessage;

export type Message = { open: boolean; message: string; confirmFunction: Function | null };
