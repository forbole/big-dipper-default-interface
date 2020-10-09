import React from 'react';
import { Footer } from '@components';

export const Layout = (props: any) => {
  const {
    children, className,
  } = props;

  return (
    <div className={className}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
