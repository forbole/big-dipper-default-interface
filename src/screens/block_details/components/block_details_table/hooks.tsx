import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  useQuery,
  gql,
} from '@apollo/client';
import { BLOCK_DETAILS } from '@graphql/queries';
import { BlockDetail } from '@models';
import { blockDetailsParser } from '@src/graphql/parsers/queries';

export const useBlockDetailsTableHook = () => {
  const router = useRouter();
  const [blockData, setBlockData] = useState<BlockDetail>(BlockDetail.fromJson({
  }));

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${BLOCK_DETAILS}`, {
    variables: {
      height: router?.query?.block,
    },
    onCompleted: (data) => {
      const parsedBlockData = blockDetailsParser(data);
      if (!parsedBlockData) {
        router.push('/404');
      } else {
        setBlockData(parsedBlockData);
      }
    },
  });

  return {
    data: blockData,
  };
};
