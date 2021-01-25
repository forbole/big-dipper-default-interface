import * as R from 'ramda';
import { CommunityPool } from '@models';

export const communityPoolParser = (data:any): CommunityPool[] => {
  return (
    R.pathOr([], ['community_pool', 0, 'coins'], data).map((x) => CommunityPool.fromJson(x))
  );
};
