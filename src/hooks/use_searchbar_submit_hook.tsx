import { useRouter } from 'next/router';
import { getAddressRole } from '@utils';

/**
 * Gloabl hook to handle layout searchbar
 */
export const useSearchbarSubmitHook = () => {
  const router = useRouter();
  const handleSearchbarSubmit = (value:string) => {
    const addressRole = getAddressRole(value);

    if (addressRole === 'validator') {
      router.push(`/validators/${value}`);
    } else if (addressRole === 'user') {
      router.push(`/accounts/${value}`);
    } else if (!isNaN(Number(value.replace(/[^a-zA-Z0-9 -]/gi, '')))) {
      router.push(`/blocks/${value}`);
    } else {
      router.push(`/activities/${value}`);
    }
  };
  return (
    {
      handleSearchbarSubmit,
    }
  );
};
