import * as R from 'ramda';
import {
  UserStaking, TotalVotingPower,
} from '@models';

export const userStakingParser = (data:any): UserStaking => {
  const userStaking = R.pathOr({
  }, ['account', 0], data);
  return UserStaking.fromJson(userStaking);
};

export const totalVotingPowerParser = (data:any): TotalVotingPower => {
  return (
    TotalVotingPower.fromJson(data ?? {
    })
  );
};

// /**
//  * Helper to get the latest staking height account
//  * @param data
//  */
// export const userStakingLatestHeightParser = (data:any)
// : number => {
//   const height = R.pathOr(0, ['block', 0, 'height'], data);

//   return height;
// };
