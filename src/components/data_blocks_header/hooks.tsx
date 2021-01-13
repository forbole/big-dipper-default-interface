import { useState } from 'react';
import * as R from 'ramda';
import {
  useQuery, useSubscription,
} from '@apollo/client';
import { LATEST_BLOCK_HEIGHT } from '@graphql/subscriptions';
import {
  TOTAL_ACTIVE_VALIDATORS,
  AVERAGE_BLOCK_TIMES,
} from '@graphql/queries';
import { latestBlockHeightParser } from '@graphql/subscriptions/parsers';
import { averageBlockTimesParser } from '@graphql/queries/parsers';
import { TotalActiveValidators } from '@models';
import { generalConfig } from '@src/general_config';

export const useLatestBlockHook = () => {
  const [blockHeight, setBlockHeight] = useState({
  });

  useSubscription(LATEST_BLOCK_HEIGHT, {
    onSubscriptionData: (data) => {
      setBlockHeight(latestBlockHeightParser(data));
    },
  });

  return {
    latestBlockHeight: blockHeight,
  };
};

export const useActiveValidatorsHook = () => {
  const validators = useQuery(TOTAL_ACTIVE_VALIDATORS, {
    pollInterval: generalConfig.pollInterval.default,
  });

  const formattedData = TotalActiveValidators.fromJson(R.pathOr({
  }, ['data'], validators));

  return {
    validators: formattedData,
  };
};

export const useAveragetimeBlockHook = () => {
  const [duration, setDuration] = useState('lastDay');
  const [durationData, setDurationData] = useState({
  });

  useQuery(AVERAGE_BLOCK_TIMES, {
    pollInterval: generalConfig.pollInterval.default,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: any) => {
      setDurationData(averageBlockTimesParser(data));
    },
  });

  const handleBlockTimeDurationClick = (value:string) => {
    setDuration(value);
  };

  return {
    averageBlockTimes: durationData,
    handleBlockTimeDurationClick,
    duration,
  };
};
