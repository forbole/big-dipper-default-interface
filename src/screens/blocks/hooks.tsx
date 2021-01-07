import {
  useEffect, useState,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { LATEST_BLOCKS } from '@graphql/queries';
import { LatestBlock } from '@models';
import { generalConfig } from '@src/general_config';

const LIMIT = 10;

export const useBlocksHook = () => {
  const router = useRouter();
  const [state, setState] = useState({
    data: [],
    hasMore: true,
    offset: 0,
  });

  // ===============================
  // get data
  // ===============================

  // initial latest block with polling
  const latestBlock = useQuery(LATEST_BLOCKS, {
    pollInterval: generalConfig.fastInterval,
    variables: {
      limit: 1,
      offset: 0,
    },
  });

  const latestBlocks = useQuery(LATEST_BLOCKS, {
    variables: {
      limit: LIMIT,
      offset: 1,
    },
  });

  useEffect(() => {
    const formattedlatestBlockData = R.uniq(
      R.concat(
        R.pathOr([], ['data', 'blocks'], latestBlock)?.map((block) => LatestBlock.fromJson(block)),
        state.data,
      ),
    );
    handleSetState({
      data: formattedlatestBlockData,
    });
  }, [latestBlock.data]);

  useEffect(() => {
    const formattedlatestBlockData = R.uniq(
      R.concat(
        state.data,
        R.pathOr([], ['data', 'blocks'], latestBlocks)?.map((block) => LatestBlock.fromJson(block)),
      ),
    );
    handleSetState({
      data: formattedlatestBlockData,
    });
  }, [latestBlocks.data]);

  // ===============================
  // utils
  // ===============================
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handleLoadMore = () => {
    if (state.data.length > 10) {
      console.log(state.data.length, 'im in load more');
      latestBlocks?.fetchMore({
        variables: {
          offset: state.data.length,
        },
      });
      handleSetState({
        hasMore: false,
      });
    }
  };

  const handleClick = (data:any) => {
    if (typeof data?.height?.value === 'number') {
      router.push(`/blocks/${data.height.value}`);
    }
  };

  return {
    state,
    handleSetState,
    handleLoadMore,
    handleClick,
  };
};
