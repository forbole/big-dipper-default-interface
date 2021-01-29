import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  useQuery, gql,
} from '@apollo/client';
import { VALIDATOR_LATEST_BLOCKS } from '@graphql/queries';
import { validatorLatestBlockParser } from '@graphql/parsers/queries';
import { ValidatorLatestBlock } from '@models';
import { generalConfig } from '@src/general_config';
import { formatBlockInfo } from './utils';

export const useValidatorBlocksHook = () => {
  const router = useRouter();
  const [blockInfo, setBlockInfo] = useState<ValidatorLatestBlock[]>([]);

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${VALIDATOR_LATEST_BLOCKS}`, {
    variables: {
      address: router?.query?.validator ?? null,
    },
    pollInterval: generalConfig.pollInterval.minute,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      const parsedData = validatorLatestBlockParser(data);
      setBlockInfo(parsedData);
    },
  });

  return {
    blockInfo: formatBlockInfo(blockInfo),
  };
};
