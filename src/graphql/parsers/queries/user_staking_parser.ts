import { UserStaking } from '@models';

export const userStakingParser = (data:any): UserStaking => {
  return (
    UserStaking.fromJson(data)
  );
};
