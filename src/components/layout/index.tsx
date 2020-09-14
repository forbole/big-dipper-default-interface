import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { useLayoutHook } from './hooks';

export const Layout = (props:any) => {
  const { children } = props;
  const { theme } = useLayoutHook();

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
