import { useState } from 'react';

export const useLayoutHook = () => {
  // wigman update later
  const setLanguage = ({
    key, value,
  }: any) => {
    console.log(`Click Value ${value} with key ${key}`);
  };

  // ==========================
  // search bar
  // ==========================
  const handleSearchbarSubmit = (value:string) => {
    console.log('The value: ', value);
  };

  return {
    setLanguage,
    handleSearchbarSubmit,
  };
};

/**
 * Handles mobile nav states
 */
export const useMobileNavHook = () => {
  // animation for the hamburger menu
  const [isOpen, setOpen] = useState(false);
  const [isNetworkOpen, setNetwork] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);

  // toggles between nav and network menu
  const toggleNavMenus = () => {
    if ((isOpen && isNetworkOpen) || (isOpen && isMenuOpen)) {
      if (isNetworkOpen) {
        setNetwork(false);
      }
      if (isMenuOpen) {
        setMenu(false);
      }
      setOpen(false);
    } else {
      // if initial state is closed then we open navbar
      setMenu(true);
      setOpen(true);
    }
  };

  const openNetwork = () => {
    // make sure everything else is closed first
    if (isMenuOpen) {
      setMenu(false);
    }
    setNetwork(true);
    setOpen(true);
  };

  return {
    isOpen,
    isNetworkOpen,
    isMenuOpen,
    toggleNavMenus,
    openNetwork,
  };
};
