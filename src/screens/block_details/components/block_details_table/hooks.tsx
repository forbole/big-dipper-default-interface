import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  useQuery,
  gql,
} from '@apollo/client';
import { BLOCK_DETAILS } from '@graphql/queries';
import { BlockDetail } from '@models';

export const useBlockDetailsTable = () => {
  const router = useRouter();
  const [blockDetails, setBlockDetails] = useState<BlockDetail>(BlockDetail.fromJson({
  }));

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${BLOCK_DETAILS}`, {
    variables: {
      height: router?.query?.block,
    },
    onCompleted: (data) => {
      console.log(data, 'data');
    },
  });

  return {
    blockDetails,
  };
};
