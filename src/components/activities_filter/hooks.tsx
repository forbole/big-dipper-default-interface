import { useState } from 'react';

export const useActivitiesFilterHook = (callback: any) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleOnFilterSelect = (selected) => {
    const newSelectedFilter = selected.key === 'none' ? '' : selected.key;
    setSelectedFilter(newSelectedFilter);
    if (callback) {
      callback(selected);
    }
  };

  return {
    handleOnFilterSelect,
    selectedFilter,
  };
};
