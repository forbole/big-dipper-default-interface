import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { COMMUNITY_POOL } from '@graphql/queries';
import { generalConfig } from '@src/general_config';
import { communityPoolParser } from '@src/graphql/parsers/queries';

export const useMarketHook = () => {
  const [communityPoolData, setCommunityPoolData] = useState([]);

  useQuery(COMMUNITY_POOL, {
    pollInterval: generalConfig.pollInterval.default,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data:any) => {
      setCommunityPoolData(communityPoolParser(data));
    },
  });

  return {
    communityPool: {
      data: communityPoolData,
    },
  };
};
