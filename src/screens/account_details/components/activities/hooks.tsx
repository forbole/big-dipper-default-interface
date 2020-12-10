import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { dummyLatestActivitiesData } from './utils';

export const useActivitiessHook = () => {
  const router = useRouter();
  const [
    state, setState,
  ] = useState({
    data: dummyLatestActivitiesData,
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

  const handleClick = (data:any) => {
    if (data?.hash) {
      router.push(`/activities/${data.hash}`);
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