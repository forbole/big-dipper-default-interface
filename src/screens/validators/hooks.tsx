import { useState } from 'react';
import { handleSearchbarSubmit } from '@utils';

export const useValidatorHook = () => {
  return {
    handleSearchbarSubmit,
  };
};

export const useValidatorListHook = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event:any, newValue: number) => {
    setTabValue(newValue);
  };

  return {
    tabValue,
    handleTabChange,
  };
};
