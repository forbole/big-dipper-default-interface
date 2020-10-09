import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { MaxWidthContainerProps } from './types';

const MaxWidthContainer = (props:MaxWidthContainerProps) => {
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

export default MaxWidthContainer;
