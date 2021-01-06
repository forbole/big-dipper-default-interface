import {
  useEffect, useState,
} from 'react';
import * as R from 'ramda';
import {
  useQuery, useSubscription,
} from '@apollo/client';
import { LATEST_BLOCK_HEIGHT } from '@graphql/subscriptions';
import { LatestBlockHeight } from '@models';
import { generalConfig } from '@src/general_config';
// import { DURATION_DATA } from './utils';

export const useDataBlocksHeaderHook = () => {
  // ====================================
  // Latest Block Height Subscription
  // ====================================
  const {
    data: latestBlockHeightData,
    error: latestBlockHeightError,
  } = useSubscription(LATEST_BLOCK_HEIGHT);
  const latestBlockHeightRaw = R.pathOr({
  }, ['latest_height', 0], latestBlockHeightData);
  const latestBlockHeightFormat = LatestBlockHeight.fromJson(latestBlockHeightRaw);

  // ====================================
  // Average Block Time
  // ====================================
  // To disable refetching if it's the initial fetch
  // const [intialFetchComplete, setInitialFetchComplete] = useState(false);
  // const [duration, setDuration] = useState('lastDay');
  // const [durationValues, setDurationData] = useState({
  //   allTime: null,
  //   lastMinute: null,
  //   lastHour: null,
  //   lastDay: null,
  // });

  // const {
  //   data: blockTimeData,
  //   refetch: blockTimeRefetch,
  // } = useQuery(DURATION_DATA[duration].query);

  // useEffect(() => {
  //   if (!durationValues[duration] && DURATION_DATA[duration]?.query && intialFetchComplete) {
  //     blockTimeRefetch();
  //   }
  //   // If the initial duration is lastMinute we can refetch
  //   const blockTimeRaw = DURATION_DATA[duration]?.getRawData(blockTimeData);
  //   const blockTimeFormat = DURATION_DATA[duration].model?.fromJson(blockTimeRaw);
  //   const newDurationDataState = R.mergeDeepLeft({
  //     [duration]: blockTimeFormat?.averageTime?.toFixed(2) ?? null,
  //   }, durationValues);

  //   setDurationData(newDurationDataState);
  //   if (!intialFetchComplete) {
  //     setInitialFetchComplete(true);
  //   }
  // }, [duration, blockTimeData]);

  // const handleBlockTimeDurationClick = (value:string) => {
  //   setDuration(value);
  // };

  // ====================================
  // Others
  // ====================================

  return {
    // handleBlockTimeDurationClick,
    // duration,
    // durationValue: durationValues[duration] ?? '0',
    latestBlockHeight: {
      // loading: latestBlockHeightLoading,
      error: latestBlockHeightError,
      data: latestBlockHeightFormat,
    },
  };
};
