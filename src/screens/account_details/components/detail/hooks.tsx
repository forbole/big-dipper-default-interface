import { useState } from 'react';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import {
  useLazyQuery,
  useQuery, gql,
} from '@apollo/client';
import {
  USER_INFO,
  USER_INFO_LATEST_HEIGHT,
} from '@graphql/queries';
import { generalConfig } from '@src/general_config';
import {
  userInfoParser,
  userInfoLatestHeightParser,
} from '@src/graphql/parsers/queries';
import { UserInfo } from '@models';

export const useDetailHook = (t: any) => {
  const handleCopy = (value: string) => {
    copy(value);
    toast(`${t('common:copied')}!`);
  };
  const [userInfo, setUserInfo] = useState<UserInfo>(UserInfo.fromJson({
  }));
  const router = useRouter();

  const [getUserInfo] = useLazyQuery(gql`${USER_INFO}`, {
    onCompleted: (data) => {
      const parsedData = userInfoParser(data);
      setUserInfo(parsedData);
    },
  });

  useQuery(gql`${USER_INFO_LATEST_HEIGHT}`, {
    variables: {
      address: router?.query?.address ?? null,
    },
    onCompleted: (data) => {
      const height = userInfoLatestHeightParser(data);
      if (height) {
        getUserInfo({
          variables: {
            address: router?.query?.address,
            height,
          },
        });
      }
    },
    pollInterval: generalConfig.pollInterval.default,
    notifyOnNetworkStatusChange: true,
  });

  return {
    userInfo,
    handleCopy,
  };
};
