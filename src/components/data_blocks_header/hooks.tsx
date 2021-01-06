import {
  useEffect, useState,
} from 'react';
import * as R from 'ramda';
import {
  useQuery, useSubscription,
} from '@apollo/client';
import { LATEST_BLOCK_HEIGHT } from '@graphql/subscriptions';
import {
  TOTAL_ACTIVE_VALIDATORS,
  AVERAGE_BLOCK_TIMES,
} from '@graphql/queries';
import {
  LatestBlockHeight,
  TotalActiveValidators,
  AverageBlockTimes,
} from '@models';
import { generalConfig } from '@src/general_config';

export const useLatestBlockHook = () => {
  const latestBlockHeight = useSubscription(LATEST_BLOCK_HEIGHT);
  const formattedData = LatestBlockHeight.fromJson(R.pathOr({
  }, ['data', 'latest_height', 0], latestBlockHeight));
  // wingman
  // figure out how error is handled
  // useEffect(() => {
  //   if (latestBlockHeight.error) {
  //     console.error(latestBlockHeight?.error?.message);
  //   }
  // }, [latestBlockHeight?.data, latestBlockHeight?.error]);

  return {
    latestBlockHeight: formattedData,
  };
};

export const useActiveValidatorsHook = () => {
  const validators = useQuery(TOTAL_ACTIVE_VALIDATORS, {
    pollInterval: generalConfig.pollInterval,
  });

  const formattedData = TotalActiveValidators.fromJson(R.pathOr({
  }, ['data'], validators));

  return {
    validators: formattedData,
  };
};

export const useAveragetimeBlockHook = () => {
  const [duration, setDuration] = useState('lastDay');

  const averageBlockTimes = useQuery(AVERAGE_BLOCK_TIMES, {
    pollInterval: 60000, // poll interval per minute
  });

  const formattedData = AverageBlockTimes.fromJson(R.pathOr({
  }, ['data'], averageBlockTimes));

  const handleBlockTimeDurationClick = (value:string) => {
    setDuration(value);
  };

  return {
    averageBlockTimes: formattedData,
    handleBlockTimeDurationClick,
    duration,
  };
};
