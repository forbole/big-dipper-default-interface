import { useState } from 'react';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import {
  useQuery, gql,
} from '@apollo/client';
import { USERINFO } from '@graphql/queries';
import { generalConfig } from '@src/general_config';
import { userInfoParser } from '@src/graphql/parsers/queries';
import { UserInfo } from '@models';

export const useDetailHook = (t:any) => {
  const handleCopy = (value:string) => {
    copy(value);
    toast(`${t('common:copied')}!`);
  };

  const [userInfo, setUserInfo] = useState<UserInfo>(UserInfo.fromJson({
  }));
  useQuery(gql`${USERINFO}`, {
    pollInterval: generalConfig.pollInterval.default,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setUserInfo(userInfoParser(data));
    },
  });
  console.log('userInfo', userInfo);

  return {
    userInfo,
    handleCopy,
  };
};
