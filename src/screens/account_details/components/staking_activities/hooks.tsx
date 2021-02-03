import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  useLazyQuery,
  useQuery,
  gql,
} from '@apollo/client';
import {
  USER_STAKING, LATEST_BLOCK_HEIGHT, TOTAL_VOTING_POWER,
} from '@graphql/queries';
import {
  userStakingParser, userStakingLatestHeightParser, totalVotingPowerParser,
} from '@src/graphql/parsers/queries';
import {
  UserStaking, TotalVotingPower,
} from '@models';

export const useStakingActivitiesHook = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: any, newValue: number) => {
    setTabValue(newValue);
  };

  const router = useRouter();
  const [userStaking, setUserStaking] = useState<UserStaking>(UserStaking.fromJson({
  }));

  const [totalVotingPower, setTotalVotingPower] =
    useState<TotalVotingPower>(TotalVotingPower.fromJson({
    }));

  // ===============================
  // get data
  // ===============================
  const [getUserStaking] = useLazyQuery(gql`${USER_STAKING}`, {
    onError: (error) => { console.log('ErrorUS', error.message)},
    onCompleted: (data) => {
      console.log('userStaking', data);
      const parsedData = userStakingParser(data);
      setUserStaking(parsedData);
    },
  });

  const [getTotalVotingPower] = useLazyQuery(gql`${TOTAL_VOTING_POWER}`, {
    onError: (error) => { console.log('ERRORvotingPower', error.message) },
    onCompleted: (data) => {
      // console.log('votingPower', data);
      const parsedData = totalVotingPowerParser(data);

      console.log('votingPowerParsed', data);
      setTotalVotingPower(parsedData);
    },
  });

  useQuery(gql`${LATEST_BLOCK_HEIGHT}`, {
    onError: (error) => { console.log('heightError', error.message); },
    onCompleted: (data) => {
      // console.log('height', data);
      const height = userStakingLatestHeightParser(data);
      console.log('height', height);
      if (height) {
        getUserStaking({
          variables: {
            address: router?.query?.address ?? null,
            height,
          },
        });
        getTotalVotingPower({
          variables: {
            height,
          },
        });
      }
    },
  });

  console.log('userStaking', UserStaking);

  return {
    userStaking,
    totalVotingPower,
    tabValue,
    handleTabChange,
  };
};
