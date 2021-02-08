import {
  useState, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  BigDipperNetwork, ChainId,
} from '@models';
import {
  useQuery, gql,
} from '@apollo/client';
import { CHAIN_ID } from '@graphql/queries';
import { chainIdParser } from '@src/graphql/parsers/queries';

/**
 * Handles mobile nav states
 */
export const useMobileNavHook = (isDesktop:boolean) => {
  // animation for the hamburger menu
  const [isOpen, setOpen] = useState(false);
  const [isNetworkOpen, setNetwork] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDesktop) {
      turnOffTabs();
    }
  }, [isDesktop]);

  // calls when mobile logo has been clicked
  const returnToHome = () => {
    router.push('/');
  };

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
    returnToHome,
  };
};

export const useDesktopNavHook = (isDesktop:boolean) => {
  const [isMenuOpen, setMenu] = useState(false);
  const [isNetworkOpen, setNetwork] = useState(false);

  useEffect(() => {
    // if window size shrinks to tablet/mobile we will close any open tabs
    if (!isDesktop) {
      turnOffTabs();
    }
  }, [isDesktop]);

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

  return {
    isMenuOpen,
    setMenu,
    toggleMenu,
    toggleNetwork,
    isNetworkOpen,
    turnOffTabs,
  };
};

export const useNetworkHook = () => {
  const NETWORK_LIST_API = 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/7564611ee896b698eeb9657e981d414dbacf5efe/bd-networks.json';
  const [networks, setNetworks] = useState([]);
  const [chainId, setChainId] = useState<string>('');

  useEffect(() => {
    const getNetworkList = async () => {
      let data = [];
      try {
        const results = await axios.get(NETWORK_LIST_API);
        data = results?.data ?? [];
      } catch (error) {
        console.error(error);
      }
      const formattedData = data
        .map((x) => BigDipperNetwork.fromJson(x));
      setNetworks(formattedData);
    };
    getNetworkList();
  }, []);

  useQuery(gql`${CHAIN_ID}`, {
    onCompleted: (data) => {
      setChainId(chainIdParser(data).id);
    },
  });

  return {
    networks,
    chainId,
  };
};
