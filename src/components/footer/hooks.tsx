import { useRouter } from 'next/router';

export const useFooterHooks = () => {
  const router = useRouter();
  // calls when mobile logo has been clicked
  const returnToHome = () => {
    router.push('/');
  };

  return {
    returnToHome,
  };
};
