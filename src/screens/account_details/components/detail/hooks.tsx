import { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  useQuery, gql,
} from '@apollo/client';
import { getUserInfoQuery, USERINFO } from '@graphql/queries';
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

  useEffect(() => {
    const callAxiosTest = async () => {
      const queries = [];
      // const [userInfo, setUserInfo] = useState<UserInfo>(UserInfo.fromJson({
      // }));

      queries.push(
        getUserInfoQuery('desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d'),
      );
      try {
        const query = `
      query VotingPower {
        ${getUserInfoQuery('desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d')}
      }
    `;

        const { data } = await axios({
          url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
          method: 'post',
          data: {
            query,
          },
        });
        console.log(data, 'the data coming backs');
      } catch (error) {
        console.error(error.message, 'error');
      }
    };
    // useQuery(gql`${USERINFO.}`, {
    //   pollInterval: generalConfig.pollInterval.default,
    //   notifyOnNetworkStatusChange: true,
    //   // onError:(error) => {console.log(error.message)},
    //   onCompleted: (data) => {
    //     setUserInfo(userInfoParser(data));
    //   },
    // });
    // console.log('userInfo', userInfo);
    callAxiosTest();
  }, []);

  useQuery(gql`${USERINFO}`, {
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
