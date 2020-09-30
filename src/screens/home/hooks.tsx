import { useQuery } from '@apollo/client';
import {  LATEST_BLOCK_HEIGHT } from '@graphql/queries';

export const useHomeHook = () => {
  const {
    loading, error, data,
  } = useQuery(LATEST_BLOCK_HEIGHT);
  console.log(data, 'tesdtgdfhg');
  return {
    loading,
    error,
    data,
  };
};
