import { handleSearchbarSubmit } from '@utils';
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import * as R from 'ramda';
import { dummyProposalList } from './utils';

export const useProposalHook = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [data, setData] = useState(dummyProposalList);
  // setData(data);

  const handleChange = () => {
    setIsToggled(!isToggled);
    setData(data);
    console.log(isToggled);
  };

  return {
    handleSearchbarSubmit,
    handleChange,
    isToggled,
    data,
  };
};
