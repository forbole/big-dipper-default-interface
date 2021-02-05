import * as R from 'ramda';
import { UserStaking } from '@models';

export const userStakingParser = (data:any): UserStaking => {
  // const userStaking = R.pathOr({
  // }, data);
  // return UserStaking.fromJson(userStaking);
  console.log('userStakingParser', data);
  return (
    UserStaking.fromJson(data)
  );
};

// export const totalVotingPowerParser = (data:any): TotalVotingPower => {
//   return TotalVotingPower.fromJson(data);
// };
