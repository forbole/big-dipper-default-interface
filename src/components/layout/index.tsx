import React from 'react';
import { Footer } from '@components';
import { LayoutProps } from './types';

export const Layout = (props: LayoutProps) => {
  const {
    children,
    className,
  } = props;

  return (
    <div>
      <div className={className}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
