import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { dummyLatestBlocksData } from './utils';

export const useBlocksHook = () => {
  const router = useRouter();
  const [state, setState] = useState({
    data: dummyLatestBlocksData,
    hasMore: true,
    offset: 0,
    limit: 50,
  });

  const handleSetState = (stateChange: any) => {
    const newState = R.mergeDeepLeft(stateChange, state);
    setState(newState);
  };

  const handleLoadMore = () => {
    setTimeout(() => {
      if (state.data.length < 10) {
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
          hasMore: false,
        });
      }
    }, 2500);
    return null;
  };

  const handleClick = (data:any) => {
    if (typeof data?.height?.value === 'number') {
      router.push(`/blocks/${data.height.value}`);
    }
  };

  return {
    state,
    handleSetState,
    handleLoadMore,
    handleClick,
  };
};
