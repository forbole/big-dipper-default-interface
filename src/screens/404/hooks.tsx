import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useNotFoundHook = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.replace('/');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOnClick();
    }, 3000);
    return () => clearTimeout(timer);
  });

  return {
    handleOnClick,
  };
};
