import { useState } from 'react';

export const useValidatorListHook = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchValue, setSearch] = useState('');

  const handleTabChange = (_event:any, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (e:any) => {
    setSearch(e?.target?.value);
  };

  const handleSearchSubmit = () => {
    console.log(`searched with values: ${searchValue}`);
  };

  return {
    tabValue,
    handleTabChange,
    handleSearchChange,
    handleSearchSubmit,
    searchValue,
  };
};
