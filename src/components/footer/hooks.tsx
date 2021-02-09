import { useState } from 'react';
import { useRouter } from 'next/router';

export const useFooterHooks = () => {
  const [isDonateOpen, setDonate] = useState<boolean>(false);
  const router = useRouter();
  // calls when mobile logo has been clicked
  const returnToHome = () => {
    router.push('/');
  };

  const handleDonateOpen = () => {
    setDonate(true);
  };

  const handleDonateClose = () => {
    setDonate(false);
  };

  return {
    returnToHome,
    isDonateOpen,
    handleDonateOpen,
    handleDonateClose,
  };
};
