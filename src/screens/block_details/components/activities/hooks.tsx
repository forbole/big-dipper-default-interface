import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useQuery,
  useSubscription,
  gql,
} from '@apollo/client';
import { LATEST_ACTIVITIES } from '@graphql/queries';
import {
  latestActivitiesParser,
  latestActivitiesTotalParser,
} from '@src/graphql/parsers/queries';
import { dummyLatestActivities } from './utils';

export const useActivitiesHook = () => {
  const router = useRouter();
  const [state, setState] = useState({
    data: [],
    total: 0,
  });

  // ===============================
  // get data
  // ===============================

  // handles pagination to get older blocks
  const latestActivities = useQuery(gql`${LATEST_ACTIVITIES}`, {
    variables: {
      limit: 10,
      offset: 1,
      height: Number(router?.query?.block ?? null),
    },
    onError: (error) => {
      console.error(error);
    },
    onCompleted: (data) => {
      console.log(data, 'the date');
      handleNewData(data);
    },
  });

  // ===============================
  // utils
  // ===============================
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

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
    handleOnFilterCallback,
    state,
    handleSetState,
    handleLoadMore,
    handleClick,
  };
};
