import * as R from 'ramda';
import { UserInfo } from '@models';

export const userInfoParser = (data:any): UserInfo => {
  return (
    UserInfo.fromJson(data ?? {
    })
  );
};
/**
 * Helper to get the latest account height
 * @param data
 */
export const userInfoLatestHeightParser = (data:any)
: number => {
  const delegations = R.pathOr(0, ['account', 0, 'delegations', 0, 'height'], data);
  const redelegations = R.pathOr(0, ['account', 0, 'redelegations', 0, 'height'], data);
  const undelegations = R.pathOr(0, ['account', 0, 'unbonding_delegations', 0, 'height'], data);
  const height = Math.max(delegations, redelegations, undelegations);

  return height;
};
