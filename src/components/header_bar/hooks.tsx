import * as R from 'ramda';
import { useQuery } from '@apollo/client';
import { COMMUNITY_POOL_QUERY } from '@graphql/queries';
import { CommunityPool } from '@models';

export const useHeaderBarHook = () => {
  const {
    data: communityPoolData,
    loading: communityPoolLoading,
    error: communityPoolError,
  } = useQuery(COMMUNITY_POOL_QUERY);
  const communityPoolRaw = R.pathOr([], ['community_pool', 0, 'coins'], communityPoolData);
  const communityPoolFormat = communityPoolRaw.map((x) => CommunityPool.fromJson(x));

  return {
    communityPool: {
      loading: communityPoolLoading,
      error: communityPoolError,
      data: communityPoolFormat,
    },
  };
};