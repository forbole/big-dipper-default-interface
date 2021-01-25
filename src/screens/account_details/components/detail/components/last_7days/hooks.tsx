import { useState } from 'react';
import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { useRouter } from 'next/router';
import { LatestActivity } from '@models';
import { dummyLatestActivities } from './utils';

export const useActivitiesHook = () => {
  const router = useRouter();
  const [
    state, setState,
  ] = useState<{
    data: LatestActivity[];
    hasMore: boolean;
  }>({
    data: dummyLatestActivities,
    hasMore: true,
  });

  const handleSetState = (stateChange: any) => {
    const newState = R.mergeDeepLeft(stateChange, state);
    setState(newState);
  };

  const handleLoadMore = () => {
    setTimeout(() => {
      if (state.data.length < 15) {
        handleSetState({
          data: [
            ...state.data,
          ],
          hasMore: false,
        });
      }
    }, 2500);
    return null;
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
