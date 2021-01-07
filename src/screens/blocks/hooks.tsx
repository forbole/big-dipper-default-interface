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
    total: 0,
  });

  // ===============================
  // get data
  // ===============================

  // polling to get latest block
  useQuery(LATEST_BLOCKS, {
    pollInterval: generalConfig.fastInterval,
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 1,
      offset: 0,
    },
    onCompleted: (data) => {
      const formattedlatestBlockData = R.uniq(
        R.concat(
          R.pathOr([], ['blocks'], data)?.map((block) => LatestBlock.fromJson(block)),
          state.data,
        ),
      );
      handleSetState({
        data: formattedlatestBlockData,
      });
    },
  });

  // handles pagination to get older blocks
  const latestBlocks = useQuery(LATEST_BLOCKS, {
    variables: {
      limit: LIMIT,
      offset: 1,
    },
    onCompleted: (data) => {
      handleNewData(data);
    },
  });

  // ===============================
  // utils
  // ===============================
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  /**
   * Helper to sort and merge paginated data coming in
   * @param data
   */
  const handleNewData = (data:any) => {
    const formattedlatestBlockData = R.uniq(
      R.concat(
        state.data,
        R.pathOr([], ['blocks'], data)?.map((block) => LatestBlock.fromJson(block)),
      ),
    );

    const total = R.pathOr(0, ['block_aggregate', 'aggregate', 'count'], data);

    handleSetState({
      total,
      data: formattedlatestBlockData,
    });
  };

  const handleLoadMore = async () => {
    if (state.data.length > 10) {
      await latestBlocks?.fetchMore({
        variables: {
          offset: state.data.length,
        },
      }).then(({ data }) => {
        handleNewData(data);
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
