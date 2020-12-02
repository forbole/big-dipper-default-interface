import { useState } from 'react';
import * as R from 'ramda';
import { handleSearchbarSubmit } from '@utils';
import { useRouter } from 'next/router';
import { dummyLatestActivitiesData } from './utils';

export const useActivitiesHook = () => {
  const router = useRouter();
  const [
    state, setState,
  ] = useState({
    data: dummyLatestActivitiesData,
    hasMore: true,
    selectedFilter: '',
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

  const handleOnFilterSelect = (selected) => {
    const newSelectedFilter = selected.key === 'none' ? '' : selected.key;
    handleSetState({
      selectedFilter: newSelectedFilter,
    });
    console.log(`filter selected in activities: ${selected.key}`);
  };

  return {
    handleSearchbarSubmit,
    state,
    handleSetState,
    handleLoadMore,
    handleClick,
    handleOnFilterSelect,
  };
};
