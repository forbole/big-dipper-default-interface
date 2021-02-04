import { useState } from 'react';
import {
  useQuery,
  useLazyQuery,
  useSubscription,
  gql,
} from '@apollo/client';
import { LATEST_BLOCK_HEIGHT } from '@graphql/subscriptions';
import {
  TOTAL_ACTIVE_VALIDATORS,
  AVERAGE_BLOCK_TIMES,
  LATEST_BLOCK_HEIGHT as LATEST_BLOCK_HEIGHT_QUERY,
} from '@graphql/queries';
import { latestBlockHeightParser } from '@src/graphql/parsers/subscriptions';
import {
  averageBlockTimesParser,
  totalActiveValidatorsParser,
  latestBlockHeightParser as latestBlockHeightParserQuery,
} from '@src/graphql/parsers/queries';
import { generalConfig } from '@src/general_config';
import {
  LatestBlockHeight, TotalActiveValidators,
} from '@models';

export const useLatestBlockHook = () => {
  const [blockHeight, setBlockHeight] = useState<LatestBlockHeight>(LatestBlockHeight.fromJson({
  }));

  useSubscription(gql`${LATEST_BLOCK_HEIGHT}`, {
    onSubscriptionData: (data) => {
      setBlockHeight(latestBlockHeightParser(data));
    },
  });

  return {
    latestBlockHeight: blockHeight,
  };
};

export const useActiveValidatorsHook = () => {
  const [validatorsData, setValidatorsData] = useState<TotalActiveValidators>(
    TotalActiveValidators.fromJson([]),
  );

  const [getValidators] = useLazyQuery(gql`${TOTAL_ACTIVE_VALIDATORS}`, {
    onCompleted: (data: any) => {
      setValidatorsData(totalActiveValidatorsParser(data));
    },
  });

  useQuery(gql`${LATEST_BLOCK_HEIGHT_QUERY}`, {
    onCompleted: (data) => {
      const height = latestBlockHeightParserQuery(data);
      if (height) {
        getValidators({
          variables: {
            height,
          },
        });
      }
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

  useQuery(gql`${AVERAGE_BLOCK_TIMES}`, {
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
