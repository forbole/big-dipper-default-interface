import React from 'react';
import classnames from 'classnames';
import { CircularProgress } from '@material-ui/core';
import { useGetStyles } from './styles';

/**
 * Loading component for infinite scrolling
 */
const InfiniteLoader = () => {
  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, 'infinite-loader')}>
      <CircularProgress />
    </div>
  );
};

export default InfiniteLoader;
