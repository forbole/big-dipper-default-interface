import * as R from 'ramda';
import { UserStaking } from '@models';

export const userStakingParser = (data:any): UserStaking => {
  return (
    UserStaking.fromJson(data)
  );
};

// export const totalVotingPowerParser = (data:any): TotalVotingPower => {
//   return TotalVotingPower.fromJson(data);
// };
