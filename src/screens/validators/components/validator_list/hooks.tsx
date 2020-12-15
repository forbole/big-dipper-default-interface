import { useState } from 'react';
import { useRouter } from 'next/router';

export const useValidatorListHook = () => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [searchValue, setSearch] = useState('');

  const handleTabChange = (_event:any, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (e:any) => {
    setSearch(e?.target?.value);
  };

  const handleSearchSubmit = (e:any) => {
    e.preventDefault();
    console.log(`searched with values: ${searchValue}`);
  };

  const handleRowClick = (data:any) => {
    if (data?.operatorAddress) {
      router.push(`/validators/${data.operatorAddress}`);
    }
  };

  return {
    tabValue,
    handleTabChange,
    handleSearchChange,
    handleSearchSubmit,
    searchValue,
    handleRowClick,
  };
};
