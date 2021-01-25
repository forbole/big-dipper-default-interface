import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { CommunityPool } from '@models';

export const communityPoolParser = (data:any): CommunityPool[] => {
  return (
    R.pathOr([], ['community_pool', 0, 'coins'], data).map((x) => CommunityPool.fromJson(x))
  );
};
