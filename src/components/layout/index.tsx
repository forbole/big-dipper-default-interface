import React, { useContext } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  MobileNav, DesktopNav,
} from 'big-dipper-internal-ui';
import { Footer } from '@components';
import { ThemeModeContext } from '@contexts';
import { useGetScreenSize } from '@utils';
import { LayoutProps } from './types';
import {
  useMobileNavHook,
  useDesktopNavHook,
  // useLayoutHook,
} from './hooks';
import {
  getLanguageList,
  getNavComponents,
} from './utils';
import { NetworkItem } from './components';
import { useGetStyles } from './styles';

export const Layout = (props: LayoutProps) => {
  const { t } = useTranslation('common');
  const { classes } = useGetStyles();
  const {
    children,
    className = '',
    searchBar,
  } = props;

  // ============================
  // Global props
  // ============================
  const {
    getThemeMode,
    toggleThemeMode,
    getCurrentLanguage,
    changeLanguage,
  } = useContext(ThemeModeContext);
  const windowSize = useGetScreenSize();
  const mobileHook = useMobileNavHook(windowSize);
  const desktopHook = useDesktopNavHook(windowSize);
  // ============================
  // Languages
  // ============================
  const languagesList = getLanguageList();
  const selectedLanguage = getCurrentLanguage();
  const language = {
    languages: languagesList,
    onClick: changeLanguage,
    selected: selectedLanguage,
  };
  // ============================
  // Theme
  // ============================
  const currentTheme = getThemeMode();
  const themeMode = {
    mode: currentTheme,
    onClick: toggleThemeMode,
  };
  // ============================
  // Network
  // ============================
  const selectedNetwork = {
    online: true,
    value: 'cosmoshub3dfgdgfhghfgh',
    iconSrc: 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/8178b6bcce1d1563bac10f8a150c713724a742f1/cosmoshub.svg?sanitize=true',
  };
  const networkItems = [
    <NetworkItem />,
    <NetworkItem />,
  ];
  // ============================
  // Menu
  // ============================
  const menuItems = getNavComponents(t);
  return (
    <div className={classnames(classes.root, className)}>
      {/* desktop nav start */}
      <DesktopNav
        sideBar={{
          open: desktopHook.isMenuOpen,
          onClick: desktopHook.toggleMenu,
          items: menuItems,
        }}
        topBar={{
          network: {
            selectedNetwork,
            isNetworkOpen: desktopHook.isNetworkOpen,
            items: networkItems,
            openNetwork: desktopHook.toggleNetwork,
          },
          language,
          themeMode,
          searchBar,
        }}
      />
      {/* desktop nav end */}
      {/* mobile nav start */}
      <MobileNav
        hamburgerIcon={{
          isOpen: mobileHook.isOpen,
          onClick: mobileHook.toggleNavMenus,
        }}
        logo={{
          alt: 'big dipper logo',
          onClick: mobileHook.returnToHome,
        }}
        menu={{
          themeMode,
          language,
          isMenuOpen: mobileHook.isMenuOpen,
          items: menuItems,
        }}
        network={{
          isNetworkOpen: mobileHook.isNetworkOpen,
          items: networkItems,
          openNetwork: mobileHook.openNetwork,
          selectedNetwork,
        }}
        searchBar={searchBar}
      />
      {/* mobile nav end */}
      {/* content start */}
      <div
        className={classnames('children-wrapper', {
          desktopOpen: desktopHook.isMenuOpen,
        })}
        onClick={desktopHook.handleOffClick}
        role="button"
      >
        {children}
      </div>
      {/* content end */}
      <Footer />
    </div>
  );
};

export default Layout;
