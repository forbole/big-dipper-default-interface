import React, { useContext } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { MobileNav } from 'big-dipper-internal-ui';
import { Footer } from '@components';
import { ThemeModeContext } from '@contexts';
import { LayoutProps } from './types';
import {
  useMobileNavHook,
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

  // global theme helpers
  const {
    getThemeMode,
    toggleThemeMode,
    getCurrentLanguage,
    changeLanguage,
  } = useContext(ThemeModeContext);

  const {
    isOpen,
    isNetworkOpen,
    isMenuOpen,
    toggleNavMenus,
    openNetwork,
  } = useMobileNavHook();
  // ============================
  // Languages
  // ============================
  const languagesList = getLanguageList();
  const selectedLanguage = getCurrentLanguage();
  // ============================
  // Theme
  // ============================
  const currentTheme = getThemeMode();
  return (
    <div className={classnames(classes.root, className)}>
      <MobileNav
        hamburgerIcon={{
          isOpen,
          onClick: toggleNavMenus,
        }}
        logo={{
          alt: 'big dipper logo',
        }}
        menu={{
          isMenuOpen,
          items: getNavComponents(t),
          language: {
            languages: languagesList,
            onClick: changeLanguage,
            selected: selectedLanguage,
          },
          themeMode: {
            mode: currentTheme,
            onClick: toggleThemeMode,
          },
        }}
        network={{
          isNetworkOpen,
          items: [
            <NetworkItem />,
            <NetworkItem />,
          ],
          openNetwork,
          selectedNetwork: {
            online: true,
            value: 'cosmoshub3dfgdgfhghfgh',
          },
        }}
        searchBar={searchBar}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
