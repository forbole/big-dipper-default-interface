import React from 'react';
import { Footer } from '@components';

export const Layout = (props: any) => {
  const { children } = props;

  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
