import { useState } from 'react';
import {
  useQuery, useSubscription,
} from '@apollo/client';
import { LATEST_BLOCK_HEIGHT } from '@graphql/subscriptions';
import {
  TOTAL_ACTIVE_VALIDATORS,
  AVERAGE_BLOCK_TIMES,
} from '@graphql/queries';
import { latestBlockHeightParser } from '@src/graphql/parsers/subscriptions';
import {
  averageBlockTimesParser, totalActiveValidatorsParser,
} from '@src/graphql/parsers/queries';
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
  const [validatorsData, setValidatorsData] = useState({
  });
  useQuery(TOTAL_ACTIVE_VALIDATORS, {
    pollInterval: generalConfig.pollInterval.default,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: any) => {
      setValidatorsData(totalActiveValidatorsParser(data));
    },
  });

  return {
    validators: validatorsData,
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
