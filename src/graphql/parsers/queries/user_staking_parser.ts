import * as R from 'ramda';
import {
  UserStaking, TotalVotingPower,
} from '@models';

export const userStakingParser = (data:any): UserStaking => {
  const userStaking = R.pathOr({
  }, ['account', 0], data);
  return UserStaking.fromJson(userStaking);
  // return (
  //   UserStaking.fromJson(data ?? {
  //   })
  // );
};

export const totalVotingPowerParser = (data:any): TotalVotingPower => {
  // const totalVotingPower = R.pathOr({
  // }, ['total_voting_power', 0], data);
  // return TotalVotingPower.fromJson(totalVotingPower);
  return (
    TotalVotingPower.fromJson(data ?? {
    })
  );
};

// export const userInfoParser = (data:any): UserInfo => {
//   return (
//     UserInfo.fromJson(data ?? {
//     })
//   );
// };

/**
 * Helper to get the latest staking height activitity
 * @param data
 */
export const userStakingLatestHeightParser = (data:any)
: number => {
  const height = R.pathOr(0, ['block', 0, 'height'], data);

  return height;
};
