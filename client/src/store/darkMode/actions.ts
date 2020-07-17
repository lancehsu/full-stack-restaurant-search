import { CHANGE_MODE, ChangeDarkMode } from './types';

export const changeDarkMode = (isDarkMode?: boolean): ChangeDarkMode => ({ type: CHANGE_MODE, payload: isDarkMode });
