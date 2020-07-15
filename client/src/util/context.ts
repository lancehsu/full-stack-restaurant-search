import React, { Dispatch, SetStateAction } from 'react';

export type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};
export const DarkModeContext = React.createContext<DarkModeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => undefined,
});
