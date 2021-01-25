import { useState } from 'react';
import numeral from 'numeral';
import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { useRouter } from 'next/router';
import {
  useQuery,
  gql,
} from '@apollo/client';
import { LatestActivity } from '@models';
import { LATEST_ACTIVITIES } from '@graphql/queries';
import {
  latestActivitiesParser,
  latestActivitiesTotalParser,
} from '@src/graphql/parsers/queries';

export const useActivitiesHook = () => {
  const router = useRouter();
  const [state, setState] = useState<{
    data: LatestActivity[];
    total: number;
  }>({
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
      height: router?.query?.block ? numeral(router?.query?.block).value() : null,
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
      data: state.data,
    },
    handleSetState,
    handleLoadMore,
    handleClick,
  };
};
