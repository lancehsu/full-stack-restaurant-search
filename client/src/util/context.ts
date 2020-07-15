import React, { Dispatch, SetStateAction } from 'react';

export type DarkModeContext = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};
export const darModeContext = React.createContext<DarkModeContext>({
  isDarkMode: false,
  setIsDarkMode: () => undefined,
});
