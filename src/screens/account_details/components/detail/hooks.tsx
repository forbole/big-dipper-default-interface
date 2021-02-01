import { useState } from 'react';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import {
  useQuery, gql,
} from '@apollo/client';
import { USERINFO } from '@graphql/queries';
import { generalConfig } from '@src/general_config';
import { userInfoParser } from '@src/graphql/parsers/queries';
import { UserInfo } from '@models';

export const useDetailHook = (t: any) => {
  const handleCopy = (value: string) => {
    copy(value);
    toast(`${t('common:copied')}!`);
  };
  const [userInfo, setUserInfo] = useState<UserInfo>(UserInfo.fromJson({
  }));
  const router = useRouter();
  console.log('router', router?.query?.address);

  // useQuery(gql`${getUserInfoQuery('desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d')}`, {
  console.log('query', `${USERINFO}`);
  useQuery(gql`${USERINFO}`, {
    variables: {
      address: router?.query?.address ?? null,
    },
    pollInterval: generalConfig.pollInterval.default,
    notifyOnNetworkStatusChange: true,
    // onError:(error) => {console.log(error.message)},
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
