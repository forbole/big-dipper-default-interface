import { useState } from 'react';
import { useRouter } from 'next/router';

import {
  useLazyQuery,
  useQuery,
  gql,
} from '@apollo/client';
import {
  VALIDATOR_STAKING,
  VALIDATOR_STAKING_LATEST_HEIGHT,
} from '@graphql/queries';
import {
  validatorStakingParser,
  validatorStakingLatestHeightParser,
} from '@src/graphql/parsers/queries';
import { useGetScreenSizeHook } from '@hooks';
import { ValidatorStaking } from '@models';
import { formatStakingData } from './utils';

export const useStakingActivitiesHook = () => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [staking, setStaking] = useState<ValidatorStaking>(ValidatorStaking.fromJson({
  }));
  const { isMobile } = useGetScreenSizeHook();

  // ===============================
  // get data
  // ===============================
  const [getStaking] = useLazyQuery(gql`${VALIDATOR_STAKING}`, {
    onCompleted: (data) => {
      const parsedData = validatorStakingParser(data);
      setStaking(parsedData);
    },
  });

  useQuery(gql`${VALIDATOR_STAKING_LATEST_HEIGHT}`, {
    variables: {
      address: router?.query?.validator ?? null,
    },
    onCompleted: (data) => {
      const height = validatorStakingLatestHeightParser(data);
      if (height) {
        getStaking({
          variables: {
            address: router?.query?.validator ?? null,
            height,
          },
        });
      }
    },
  });

  // ===============================
  // get utils
  // ===============================
  const handleTabChange = (_event:any, newValue: number) => {
    setTabValue(newValue);
  };

  return {
    tabValue,
    handleTabChange,
    staking: formatStakingData(staking, isMobile),
  };
};
