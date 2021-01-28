import * as R from 'ramda';
import { ValidatorStaking } from '@models';

export const validatorStakingParser = (data:any): ValidatorStaking => {
  const validator = R.pathOr({
  }, ['validator', 0], data);
  return ValidatorStaking.fromJson(validator);
};

/**
 * Helper to get the latest staking height activitity
 * @param data
 */
export const validatorStakingLatestHeightParser = (data:any)
: number => {
  const delegations = R.pathOr(0, ['validator', 0, 'delegations', 0, 'height'], data);
  const redelegations = R.pathOr(0, ['validator', 0, 'redelegations', 0, 'height'], data);
  const undelegations = R.pathOr(0, ['validator', 0, 'unbonding_delegations', 0, 'height'], data);
  const height = Math.max(delegations, redelegations, undelegations);

  return height;
};
