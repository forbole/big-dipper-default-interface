import { useState } from 'react';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import {
  useLazyQuery,
  useQuery,
  gql,
} from '@apollo/client';
import {
  USER_INFO,
  LATEST_BLOCK_HEIGHT,
} from '@graphql/queries';
import {
  userInfoParser,
  latestBlockHeightParser,
} from '@src/graphql/parsers/queries';
import { UserInfo } from '@models';

export const useDetailHook = (t: any) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(UserInfo.fromJson({
  }));
  const router = useRouter();

  // ===============================
  // get data
  // ===============================

  const [getUserInfo] = useLazyQuery(gql`${USER_INFO}`, {
    onCompleted: (data) => {
      const parsedData = userInfoParser(data);
      setUserInfo(parsedData);
    },
  });

  useQuery(gql`${LATEST_BLOCK_HEIGHT}`, {
    onCompleted: (data) => {
      const height = latestBlockHeightParser(data);
      if (height) {
        getUserInfo({
          variables: {
            address: router?.query?.address,
            // height,
            height: 1,
            // height: 2,
          },
        });
      }
    },
  });

  // ===============================
  // utils
  // ===============================
  const handleCopy = (value: string) => {
    copy(value);
    toast(`${t('common:copied')}!`);
  };

  return {
    userInfo,
    handleCopy,
  };
};
