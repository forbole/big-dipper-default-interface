import { UserStaking } from '@models';

export const userStakingParser = (data:any): UserStaking => {
  if (data) {
    return UserStaking.fromJson(data);
  }
  return {
  };
};
