import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useQuery,
  useSubscription,
  gql,
} from '@apollo/client';
import { LATEST_ACTIVITIES } from '@graphql/queries';
import { LATEST_ACTIVITY } from '@graphql/subscriptions';
import { latestActivityParser } from '@src/graphql/parsers/subscriptions';
import {
  latestActivitiesParser,
  latestActivitiesTotalParser,
} from '@src/graphql/parsers/queries';

export const useActivitiesHook = () => {
  const router = useRouter();
  const [state, setState] = useState({
    data: [],
    total: 0,
  });

  // ===============================
  // get data
  // ===============================
  // latest activity subscription
  useSubscription(gql`${LATEST_ACTIVITY}`, {
    onSubscriptionData: (data) => {
      const formattedlatestBlockData = R.uniq(
        R.concat(
          latestActivityParser(data),
          state.data,
        ),
      );
      handleSetState({
        data: formattedlatestBlockData,
      });
    },
  });

  // handles pagination to get older blocks
  const latestActivities = useQuery(gql`${LATEST_ACTIVITIES}`, {
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
        latestActivitiesParser(data),
      ),
    );

    const total = latestActivitiesTotalParser(data);

    handleSetState({
      total,
      data: formattedlatestBlockData,
    });
  };

  const handleLoadMore = async () => {
    if (state.data.length > 10) {
      await latestActivities?.fetchMore({
        variables: {
          offset: state.data.length,
        },
      }).then(({ data }) => {
        handleNewData(data);
      });
    }
  };

  const handleClick = (hash:string | number) => {
    if (hash) {
      router.push(`/activities/${hash}`);
    }
  };

  const handleOnFilterCallback = (value) => {
    console.log(`filter selected in activities: ${value.key}`);
  };

  return {
    state,
    handleSetState,
    handleLoadMore,
    handleClick,
    handleOnFilterCallback,
  };
};
