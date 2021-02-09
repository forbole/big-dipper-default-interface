import { useState } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import {
  useLazyQuery,
  useQuery,
  gql,
} from '@apollo/client';
import {
  VALIDATOR_STAKING,
  LATEST_BLOCK_HEIGHT,
} from '@graphql/queries';
import {
  validatorStakingParser,
  latestBlockHeightParser,
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
      console.log(data, 'data');
      const parsedData = validatorStakingParser(data);
      setStaking(parsedData);
    },
  });

  useQuery(gql`${LATEST_BLOCK_HEIGHT}`, {
    onCompleted: (data) => {
      const height = latestBlockHeightParser(data);
      if (height) {
        const time = moment.utc().format('YYYY-MM-DDTHH:mm:ss');
        getStaking({
          variables: {
            time,
            height,
            address: router?.query?.validator ?? null,
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
