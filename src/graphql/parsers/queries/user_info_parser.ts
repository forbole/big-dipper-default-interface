import { UserInfo } from '@models';

export const userInfoParser = (data:any): UserInfo => {
  return (
    UserInfo.fromJson(data ?? {
    })
  );
};
