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

      setUserStaking(parsedData);
    },
  });
  useQuery(gql`${LATEST_BLOCK_HEIGHT}`, {
    onCompleted: (data) => {
      const height = latestBlockHeightParser(data);
      if (height) {
        getUserStaking({
          variables: {
            address: router?.query?.address ?? null,
            height,
            utc: moment().utc().format('YYYY-MM-DDTHH:mm:ss'),
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
