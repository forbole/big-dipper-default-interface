import { useState } from 'react';

export const useStakingActivityHook = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event:any, newValue: number) => {
    setTabValue(newValue);
  };

  return {
    tabValue,
    handleTabChange,
  };
};
