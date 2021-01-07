import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useQuery } from '@apollo/client';
import { LATEST_BLOCKS } from '@graphql/queries';
import { LatestBlock } from '@models';
import { generalConfig } from '@src/general_config';

export const useLatestBlocksHook = () => {
  const router = useRouter();

  // ===============================
  // get data
  // ===============================
  const latestBlocks = useQuery(LATEST_BLOCKS, {
    pollInterval: 5000,
    // pollInterval: generalConfig.fastInterval,
    variables: {
      limit: 10,
    },
    onCompleted: () => console.log('called'),
  });

  const formattedData = R.pathOr([], ['data', 'blocks'], latestBlocks)?.map((block) => LatestBlock.fromJson(block));

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
    latestBlocks: formattedData,
  };
};
