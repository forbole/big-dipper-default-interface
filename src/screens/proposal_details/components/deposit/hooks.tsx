import { useState } from 'react';
import * as R from 'ramda';
import { depositData } from './utils';

export const useDepositHook = () => {
  const [
    state, setState,
  ] = useState({
    data: depositData,
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
    handleLoadMore,
  };
};
