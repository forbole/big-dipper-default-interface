import React from 'react';
import { Delegate } from './components';
import { useGetStyles } from './styles';

/**
 * Component that returns based on message type
 */
const ActivityMessage = (props: any) => {
  const { classes } = useGetStyles();
  return (
    <Delegate className={classes.root} />
  );
};

export default ActivityMessage;
