import {
  useState, useEffect,
} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { UseNavHookProps } from './types';

/**
 * Handles mobile nav states
 */
export const useMobileNavHook = (windowSize:UseNavHookProps) => {
  // animation for the hamburger menu
  const [isOpen, setOpen] = useState(false);
  const [isNetworkOpen, setNetwork] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);
  const theme:any = useTheme();

  useEffect(() => {
    if (windowSize.width >= theme?.breakpoints?.values?.desktop) {
      turnOffTabs();
    }
  }, [windowSize.width]);

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

  /**
   * Helper that will check and turn off any open tabs
   */
  const turnOffTabs = () => {
    if (isOpen) {
      setOpen(false);
    }
    if (isNetworkOpen) {
      setNetwork(false);
    }
    if (isMenuOpen) {
      setMenu(false);
    }
  };

  return {
    isOpen,
    isNetworkOpen,
    isMenuOpen,
    toggleNavMenus,
    openNetwork,
  };
};

export const useDesktopNavHook = (windowSize:UseNavHookProps) => {
  const [isMenuOpen, setMenu] = useState(false);
  const [isNetworkOpen, setNetwork] = useState(false);
  const theme:any = useTheme();

  useEffect(() => {
    // if window size shrings to tablet/mobile we will close any open tabs
    if (windowSize.width < theme?.breakpoints?.values?.desktop) {
      turnOffTabs();
    }
  }, [windowSize.width]);

  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  const toggleNetwork = () => {
    setNetwork(!isNetworkOpen);
  };

  /**
   * Helper that will check and turn off any open tabs
   */
  const turnOffTabs = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
    if (isNetworkOpen) {
      toggleNetwork();
    }
  };

  /**
   * Helper that turns off opened nav sections if user offclicks
   */
  const handleOffClick = () => {
    if (windowSize.width >= theme?.breakpoints?.values?.desktop) {
      turnOffTabs();
    }
  };

  return {
    isMenuOpen,
    setMenu,
    toggleMenu,
    toggleNetwork,
    isNetworkOpen,
    handleOffClick,
  };
};
