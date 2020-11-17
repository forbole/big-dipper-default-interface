import * as R from 'ramda';
import { useQuery } from '@apollo/client';
import { LATEST_BLOCK_HEIGHT_QUERY } from '@graphql/queries';
import { LatestBlockHeight } from '@models';
import { generalConfig } from '@src/general_config';

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
  // Others
  // ====================================
  const handleBlockTimeDurationClick = (value:string) => {
    console.log(value, 'block time value');
  };

  return {
    handleBlockTimeDurationClick,
    latestBlockHeight: {
      loading: latestBlockHeightLoading,
      error: latestBlockHeightError,
      data: latestBlockHeightFormat,
    },
  };
};
