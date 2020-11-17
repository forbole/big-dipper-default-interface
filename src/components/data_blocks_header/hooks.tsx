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
    console.log('im in here');
    // does not exist therefore we need to get it
    const { data: blockTimeData } = useQuery(DURATION_DATA[duration].query);
    console.log(blockTimeData, 'whoops');
    const blockTimeRaw = DURATION_DATA[duration]?.getRawData(blockTimeData);
    const blockTimeFormat = DURATION_DATA[duration].model?.fromJson(blockTimeRaw);

    const newDurationDataState = R.mergeDeepLeft({
      [duration]: blockTimeFormat?.averageTime?.toFixed(2) ?? null,
    }, durationData);

    setDurationData(newDurationDataState);
  }

  const handleBlockTimeDurationClick = (value:string) => {
    setDuration(value);
  };

  // ====================================
  // Others
  // ====================================

  return {
    handleBlockTimeDurationClick,
    duration,
    durationValue: durationData[duration] ?? '-',
    latestBlockHeight: {
      loading: latestBlockHeightLoading,
      error: latestBlockHeightError,
      data: latestBlockHeightFormat,
    },
  };
};
