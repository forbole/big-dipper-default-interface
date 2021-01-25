import { useState } from 'react';
import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { useRouter } from 'next/router';
import {
  useQuery,
  useSubscription,
  gql,
} from '@apollo/client';
import { LATEST_BLOCKS } from '@graphql/queries';
import { LATEST_BLOCK } from '@graphql/subscriptions';
import { latestBlockParser } from '@src/graphql/parsers/subscriptions';
import {
  latestBlocksParser, latestBlocksTotalParser,
} from '@src/graphql/parsers/queries';

export const useBlocksHook = () => {
  const router = useRouter();
  const [state, setState] = useState({
    data: [],
    total: 0,
  });

  // ===============================
  // get data
  // ===============================

  // latest block subscription
  useSubscription(gql`${LATEST_BLOCK}`, {
    onSubscriptionData: (data) => {
      const formattedlatestBlockData = R.uniq(
        R.concat(
          latestBlockParser(data),
          state.data,
        ),
      );
      handleSetState({
        data: formattedlatestBlockData,
      });
    },
  });

  // handles pagination to get older blocks
  const latestBlocks = useQuery(gql`${LATEST_BLOCKS}`, {
    variables: {
      limit: 10,
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
        latestBlocksParser(data),
      ),
    );

    const total = latestBlocksTotalParser(data);

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
