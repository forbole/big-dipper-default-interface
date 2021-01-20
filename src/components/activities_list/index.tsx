import React from 'react';
import { LatestActivities } from 'big-dipper-default-ui';
import { useGetScreenSizeHook } from '@hooks';
import { ActivitiesListProps } from './types';
import { formatActivitiesData } from './utils';
import { useGetStyles } from './styles';

/**
 * Reusable component built on top of LatestActivities component
 * Takes in data and parses it in to ui ready format
 */
const ActivitiesList = (props: ActivitiesListProps) => {
  const {
    data,
    onClick,
  } = props;
  const {
    isTablet, isDesktop,
  } = useGetScreenSizeHook();
  const { classes } = useGetStyles();
  const parsedData = formatActivitiesData(data, {
    isTablet: isTablet || isDesktop,
  });

  return (
    <div>
      <LatestActivities
        className={classes.root}
        transactions={parsedData}
        onClick={onClick}
      />
    </div>
  );
};

export default ActivitiesList;
