import { useState } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
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
import { UserStaking } from '@models';
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

  // ===============================
  // get data
  // ===============================
  const [getUserStaking] = useLazyQuery(gql`${USER_STAKING}`, {
    onCompleted: (data) => {
      const parsedData = userStakingParser(data);

      console.log('parsedData', parsedData);

      setUserStaking(parsedData);
      console.log('userStaking', userStaking);
    },
  });

  useQuery(gql`${LATEST_BLOCK_HEIGHT}`, {
    onCompleted: (data) => {
      const height = latestBlockHeightParser(data);
      if (height) {
        console.log('height', height);
        getUserStaking({
          variables: {
            address: router?.query?.address,
            height,
            utc: moment,
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
