import { useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useQuery } from '@apollo/client';
import { LATEST_BLOCKS } from '@graphql/queries';
import { LatestBlock } from '@models';
import { generalConfig } from '@src/general_config';

export const useLatestBlocksHook = () => {
  const [latestBlocksdata, setLatestBlocksData] = useState([]);
  const router = useRouter();

  // ===============================
  // get data
  // ===============================
  useQuery(LATEST_BLOCKS, {
    pollInterval: generalConfig.pollInterval.minute,
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 10,
      offset: 0,
    },
    onCompleted: (data) => {
      const formattedData = R.pathOr([], ['blocks'], data)?.map((block) => LatestBlock.fromJson(block));
      setLatestBlocksData(formattedData);
    },
  });

  // ===============================
  // others
  // ===============================
  const handleClick = (data:any) => {
    if (typeof data?.height?.value === 'number') {
      router.push(`/blocks/${data.height.value}`);
    }
  };

  return {
    handleClick,
    latestBlocks: latestBlocksdata,
  };
};
