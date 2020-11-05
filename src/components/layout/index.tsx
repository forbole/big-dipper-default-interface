import React, { useContext } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { MobileNav } from 'big-dipper-internal-ui';
import { Footer } from '@components';
import { ThemeModeContext } from '@contexts';
import { LayoutProps } from './types';
import {
  useMobileNavHook,
  useLayoutHook,
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
    searchBar: {
      searchBarCallback,
      searchBarPlaceholder,
    },
  } = props;

  const {
    getThemeMode,
    toggleThemeMode,
    getCurrentLanguage,
  } = useContext(ThemeModeContext);

  const { setLanguage } = useLayoutHook();

  const {
    isOpen,
    isNetworkOpen,
    isMenuOpen,
    toggleNavMenus,
    openNetwork,
  } = useMobileNavHook();

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
            languages: getLanguageList(),
            onClick: setLanguage,
            selected: getCurrentLanguage(),
          },
          themeMode: {
            mode: getThemeMode(),
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
        searchBar={{
          searchBarCallback,
          searchBarPlaceholder,
        }}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
