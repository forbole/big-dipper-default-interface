import React, { useContext } from 'react';
import { MobileNav } from 'big-dipper-internal-ui';
import { Footer } from '@components';
import { ThemeModeContext } from '@contexts';
import { LayoutProps } from './types';
import {
  useMobileNavHook, useLayoutHook,
} from './hooks';
import { getLanguageList } from './utils';

export const Layout = (props: LayoutProps) => {
  const {
    children,
    className = '',
    searchBar,
  } = props;

  const {
    getThemeMode,
    toggleThemeMode,
    getCurrentLanguage,
  } = useContext(ThemeModeContext);

  const {
    setLanguage,
    handleSearchbarSubmit,
  } = useLayoutHook();

  const {
    isOpen,
    isNetworkOpen,
    isMenuOpen,
    toggleNavMenus,
    openNetwork,
  } = useMobileNavHook();

  return (
    <div className={className}>
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
          items: [
            <div>hello menu</div>,
          ],
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
            <h1>hello network</h1>,
          ],
          openNetwork,
          selectedNetwork: {
            online: true,
            value: 'cosmoshub3dfgdgfhghfgh',
          },
        }}
        searchBar={{
          searchBarCallback: handleSearchbarSubmit,
          searchBarPlaceholder: 'Search by block height / address / tx hash',
        }}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
