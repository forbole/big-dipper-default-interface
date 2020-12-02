import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { handleSearchbarSubmit } from '@utils';
import { dummyLatestBlocksData } from './utils';

export const useBlocksHook = () => {
  const router = useRouter();
  const [
    state, setState,
  ] = useState({
    data: dummyLatestBlocksData,
    hasMore: true,
  });

  const handleSetState = (stateChange: any) => {
    const newState = R.mergeDeepLeft(stateChange, state);
    setState(newState);
  };

  const handleLoadMore = () => {
    console.log('loading more');
    setTimeout(() => {
      if (state.data.length < 10) {
        console.log('im in here');
        handleSetState({
          data: [
            ...state.data,
            {
              proposer: <div>forbole</div>,
              height: {
                value: 20000,
                display: <div>height</div>,
              },
              time: '122 Jan 2021,13:00:22 UTC',
              hash: '89832B67F594asddw32',
              tx: 2,
            },
            {
              proposer: <div>forbole</div>,
              height: {
                value: 20000,
                display: <div>height</div>,
              },
              time: '111 Jan 2021,13:00:22 UTC',
              hash: '89832B67F594asddw32',
              tx: 2,
            },
            {
              proposer: <div>forbole</div>,
              height: {
                value: 20000,
                display: <div>height</div>,
              },
              time: '101 Jan 2021,13:00:27 UTC',
              hash: '89832B67F594asddw32',
              tx: 2,
            }],
        });
      }
    }, 1500);
    return null;
  };

  const handleClick = (data:any) => {
    if (typeof data?.height?.value === 'number') {
      router.push(`/blocks/${data.height.value}`);
    }
  };

  return {
    handleSearchbarSubmit,
    state,
    handleSetState,
    handleLoadMore,
    handleClick,
  };
};
