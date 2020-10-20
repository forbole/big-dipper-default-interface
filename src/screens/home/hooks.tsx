import { useQuery } from '@apollo/client';
import { queryExample } from '@graphql/queries';

export const useHomeHook = () => {
  const {
    loading, error, data,
  } = useQuery(queryExample);
  console.log(data, 'tesdtgdfhg');
  return {
    loading,
    error,
    data,
  };
};
