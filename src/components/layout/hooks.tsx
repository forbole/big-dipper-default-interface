import { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  darkTheme, lightTheme,
} from '@styles';

export const useLayoutHook = () => {
  const [isDarkMode, setMode] = useState<boolean | undefined>(false);

  const theme:any = isDarkMode ? darkTheme : lightTheme;

  return {
    isDarkMode,
    setMode,
    theme: createMuiTheme(theme),
  };
};
