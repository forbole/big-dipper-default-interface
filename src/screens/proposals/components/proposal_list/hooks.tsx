import { useRouter } from 'next/router';
import { useState } from 'react';
import * as R from 'ramda';
import { dummyProposalList } from './utils';

export const useProposalListHook = () => {
  const router = useRouter();
  const [
    state, setState,
  ] = useState({
    data: dummyProposalList,
    hasMore: true,
  });

  const handleClick = (data:any) => {
    router.push(`/proposals/${data.id}`);
  };

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
    handleClick,
  };
};
