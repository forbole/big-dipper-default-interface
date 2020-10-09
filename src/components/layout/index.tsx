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
      <span className={className}>
        {children}
      </span>
      <Footer />
    </div>
  );
};

export default Layout;
