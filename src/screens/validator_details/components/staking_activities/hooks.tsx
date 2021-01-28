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
import { ValidatorStaking } from '@models';
import { formatStakingData } from './utils';

export const useStakingActivitiesHook = () => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [staking, setStaking] = useState<ValidatorStaking>(ValidatorStaking.fromJson({
  }));

  // ===============================
  // get data
  // ===============================

  // useQuery(gql`${VALIDATOR_STAKING}`, {
  //   variables: {
  //     address: router?.query?.validator ?? null,
  //   },
  //   onCompleted: (data) => {
  //     const parsedData = validatorStakingParser(data);
  //     setStaking(parsedData);
  //   },
  // });

  const [getStaking] = useLazyQuery(gql`${VALIDATOR_STAKING_LATEST_HEIGHT}`);

  useQuery(gql`${VALIDATOR_STAKING_LATEST_HEIGHT}`, {
    variables: {
      address: router?.query?.validator ?? null,
    },
    onCompleted: (data) => {
      const parsedData = validatorStakingLatestHeightParser(data);
      getStaking({
        variables: {

        },
      });
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
    staking: formatStakingData(staking),
  };
};
