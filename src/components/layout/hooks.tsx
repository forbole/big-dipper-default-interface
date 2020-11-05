import { useState } from 'react';

// export const useLayoutHook = () => {

// };

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

export const useDesktopNavHook = () => {
  const [isMenuOpen, setMenu] = useState(false);
  const [isNetworkOpen, setNetwork] = useState(false);

  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  const toggleNetwork = () => {
    setNetwork(!isNetworkOpen);
  };

  // const handleClick = () => {
  //   if (open) {
  //     onClick();
  //   }
  //   if (isNetworkOpen) {
  //     toggleNetwork();
  //   }
  // };

  return {
    isMenuOpen,
    setMenu,
    toggleMenu,
    toggleNetwork,
    isNetworkOpen,
  };
};
