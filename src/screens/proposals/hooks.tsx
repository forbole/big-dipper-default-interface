import { useRouter } from 'next/router';
import { useState } from 'react';
import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { dummyProposalList } from './utils';

export const useProposalHook = () => {
  const router = useRouter();
  const [isToggled, setIsToggled] = useState(false);

  const [
    state, setState,
  ] = useState({
    data: dummyProposalList,
    hasMore: true,
  });

  const handleClick = (data:any) => {
    router.push(`/proposals/${data.id}`);
  };

  const handleChange = () => {
    setIsToggled(!isToggled);
    setState(state);
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
    handleChange,
    isToggled,
    handleLoadMore,
    state,
    handleClick,
  };
};
