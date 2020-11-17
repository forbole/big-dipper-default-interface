import { useState } from 'react';
import * as R from 'ramda';
import { useQuery } from '@apollo/client';
import { LATEST_BLOCK_HEIGHT_QUERY } from '@graphql/queries';
import { LatestBlockHeight } from '@models';
import { generalConfig } from '@src/general_config';
import { DURATION_DATA } from './utils';

export const useDataBlocksHeaderHook = () => {
  // ====================================
  // Latest Block Height Query
  // ====================================
  const {
    data: latestBlockHeightData,
    loading: latestBlockHeightLoading,
    error: latestBlockHeightError,
  } = useQuery(LATEST_BLOCK_HEIGHT_QUERY, {
    pollInterval: generalConfig.pollInterval,
  });
  const latestBlockHeightRaw = R.pathOr({
  }, ['block', 0], latestBlockHeightData);
  const latestBlockHeightFormat = LatestBlockHeight.fromJson(latestBlockHeightRaw);

  // ====================================
  // Average Block Time
  // ====================================
  const [duration, setDuration] = useState('lastMinute');
  const [durationData, setDurationData] = useState({
    allTime: null,
    lastMinute: null,
    lastHour: null,
    lastDay: null,
  });

  if (!durationData[duration] && DURATION_DATA[duration]?.query) {
    // does not exist therefore we need to get it
    const {
      data: blockTimeData,
      loading: blockTimeLoading,
      error: blockTimeError,
    } = useQuery(DURATION_QUERIES[duration].query);
    console.log(blockTimeData, 'hello');
  }

  const handleBlockTimeDurationClick = (value:string) => {
    console.log(value, 'block time value');
  };
  // ====================================
  // Others
  // ====================================

  return {
    handleBlockTimeDurationClick,
    duration,
    latestBlockHeight: {
      loading: latestBlockHeightLoading,
      error: latestBlockHeightError,
      data: latestBlockHeightFormat,
    },
  };
};
