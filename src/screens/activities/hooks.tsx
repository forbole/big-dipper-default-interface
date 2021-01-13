import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { dummyLatestActivities } from './utils';

export const useActivitiesHook = () => {
  const router = useRouter();
  const [
    state, setState,
  ] = useState({
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
    state,
    handleSetState,
    handleLoadMore,
    handleClick,
    handleOnFilterCallback,
  };
};
