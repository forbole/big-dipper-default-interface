import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useQuery,
  gql,
} from '@apollo/client';
import { formatActivitiesData } from '@utils';
import { LATEST_ACTIVITIES } from '@graphql/queries';
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

  // handles pagination to get older blocks
  const latestActivities = useQuery(gql`${LATEST_ACTIVITIES}`, {
    variables: {
      limit: 10,
      height: Number(router?.query?.block ?? null),
    },
    onError: (error) => {
      console.error(error);
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
    await latestActivities?.fetchMore({
      variables: {
        offset: state.data.length,
      },
    }).then(({ data }) => {
      handleNewData(data);
    });
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
    state: {
      total: state.total,
      data: formatActivitiesData(state.data),
    },
    handleSetState,
    handleLoadMore,
    handleClick,
  };
};
