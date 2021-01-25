import { useState } from 'react';
import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { LatestActivity } from '@models';
import { useRouter } from 'next/router';
import {
  dummyLatestActivities,
  dummyPowerEvents,
} from './utils';

export const useValidatorDetailsHook = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event:any, newValue: number) => {
    setTabValue(newValue);
  };

  return {
    tabValue,
    handleTabChange,
  };
};

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

  const handleClick = (data:any) => {
    if (data?.hash) {
      router.push(`/activities/${data.hash}`);
    }
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

export const usePowerEventsHook = () => {
  const [
    state, setState,
  ] = useState({
    data: dummyPowerEvents,
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

  return {
    state,
    handleSetState,
    handleLoadMore,
  };
};
