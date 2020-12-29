import { useRouter } from 'next/router';

/**
 * Gloabl hook to handle layout searchbar
 */
export const useSearchbarSubmitHook = () => {
  const router = useRouter();
  const handleSearchbarSubmit = (value:string) => {
    if (value.includes('cosmosvaloper')) {
      router.push(`/validators/${value}`);
    } else if (value.includes('cosmos')) {
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
