import React from 'react';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import { MaxWidthContentProps } from './types';
import { useGetStyles } from './styles';

const MaxWidthContent = (props:MaxWidthContentProps) => {
  const {
    children, className = '',
  } = props;
  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className)}>
      {children}
    </div>
  );
};

export default MaxWidthContent;
