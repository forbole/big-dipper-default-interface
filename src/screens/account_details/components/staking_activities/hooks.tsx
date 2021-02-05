import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  useLazyQuery,
  useQuery,
  gql,
} from '@apollo/client';
import {
  USER_STAKING, LATEST_BLOCK_HEIGHT,
} from '@graphql/queries';
import {
  userStakingParser, latestBlockHeightParser,
} from '@src/graphql/parsers/queries';
import {
  UserStaking,
} from '@models';
import {
  formatStakingDataDesktop, formatStakingDataMobile,
} from './utils';

export const useStakingActivitiesHook = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: any, newValue: number) => {
    setTabValue(newValue);
  };

  const router = useRouter();
  const [userStaking, setUserStaking] = useState<UserStaking>(UserStaking.fromJson({
  }));

  // const [
  //   totalVotingPower, setTotalVotingPower,
  // ] = useState<TotalVotingPower>(TotalVotingPower.fromJson({
  // }));

  // ===============================
  // get data
  // ===============================
  const [getUserStaking] = useLazyQuery(gql`${USER_STAKING}`, {
    onCompleted: (data) => {
      const parsedData = userStakingParser(data);
      setUserStaking(parsedData);
      console.log('parsedData', parsedData);
      console.log('userStaking', userStaking);
    },
  });

  // const [getTotalVotingPower] = useLazyQuery(gql`${TOTAL_VOTING_POWER}`, {
  //   onCompleted: (data) => {
  //     const parsedData = totalVotingPowerParser(data);
  //     setTotalVotingPower(parsedData);
  //   },
  // });

  useQuery(gql`${LATEST_BLOCK_HEIGHT}`, {
    onCompleted: (data) => {
      const height = latestBlockHeightParser(data);
      console.log('height', height);
      if (height) {
        getUserStaking({
          variables: {
            address: router?.query?.address,
            height,
            // height: null,
          },
        });
      }
    },
  });

  return {
    tabValue,
    handleTabChange,
    userStakingDesktop:
    formatStakingDataDesktop(userStaking),
    userStakingMobile:
    formatStakingDataMobile(userStaking),
  };
};
