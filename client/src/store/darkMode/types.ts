export const CHANGE_MODE = 'CHANGE_MODE';
export type ChangeDarkMode = { type: typeof CHANGE_MODE; payload?: boolean };
export type DarkModeAction = ChangeDarkMode;
