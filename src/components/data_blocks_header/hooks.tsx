import { useState } from 'react';
import * as R from 'ramda';
import {
  useQuery, useSubscription,
} from '@apollo/client';
import { LATEST_BLOCK_HEIGHT } from '@graphql/subscriptions';
import {
  TOTAL_VALIDATORS_COUNT,
  AVERAGE_BLOCK_TIMES,
} from '@graphql/queries';
import {
  LatestBlockHeight,
  TotalValidatorsCount,
  AverageBlockTimes,
} from '@models';
import { generalConfig } from '@src/general_config';

export const useLatestBlockHook = () => {
  const latestBlockHeight = useSubscription(LATEST_BLOCK_HEIGHT);
  const formattedData = LatestBlockHeight.fromJson(R.pathOr({
  }, ['data', 'latest_height', 0], latestBlockHeight));

  return {
    latestBlockHeight: formattedData,
  };
};

export const useActiveValidatorsHook = () => {
  const validators = useQuery(TOTAL_VALIDATORS_COUNT, {
    pollInterval: generalConfig.pollInterval.default,
  });

  const formattedData = TotalValidatorsCount.fromJson(R.pathOr({
  }, ['data'], validators));

  return {
    validators: formattedData,
  };
};

export const useAveragetimeBlockHook = () => {
  const [duration, setDuration] = useState('lastDay');

  const averageBlockTimes = useQuery(AVERAGE_BLOCK_TIMES, {
    pollInterval: generalConfig.pollInterval.minute,
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
