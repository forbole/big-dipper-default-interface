import React, { useContext } from 'react';
import { NextSeo } from 'next-seo';
import validator from 'validator';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  MobileNav,
  DesktopNav,
} from '@forbole/big-dipper-internal-ui';
import { Footer } from '@components';
import { GlobalContext } from '@contexts';
import { useGetScreenSizeHook } from '@hooks';
import { chainConfig } from '@src/chain_config';
import { LayoutProps } from './types';
import {
  useMobileNavHook,
  useDesktopNavHook,
  useNetworkHook,
} from './hooks';
import {
  getLanguageList,
  getNavComponents,
  getNetworksComponent,
} from './utils';
import { useGetStyles } from './styles';

export const Layout = (props: LayoutProps) => {
  const { t } = useTranslation('common');
  const { classes } = useGetStyles();
  const {
    children,
    className = '',
    searchBar,
    header,
    description = '',
    type = 'website',
    title = t('bigDipper'),
    imageAlt,
    image = '/images/icons/favicon-32x32.png',
  } = props;

  // ============================
  // Global props
  // ============================
  const {
    getThemeMode,
    toggleThemeMode,
    getCurrentLanguage,
    changeLanguage,
  } = useContext(GlobalContext);

  const { isDesktop } = useGetScreenSizeHook();
  const mobileHook = useMobileNavHook(isDesktop);
  const desktopHook = useDesktopNavHook(isDesktop);
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
  const {
    networks, chainId,
  } = useNetworkHook();
  const networkItems = getNetworksComponent(networks);
  const selectedNetwork = {
    online: true,
    value: chainId,
    iconSrc: chainConfig.icon,
  };
  // ============================
  // Menu
  // ============================
  const menuItems = getNavComponents(t);
  // ============================
  // Meta Tags
  // ============================
  let baseUrl = '';
  let currentPath = '';

  if (typeof window === 'object') {
    baseUrl = window?.location?.origin || '';
    currentPath = window?.location?.href || '';
  }

  const imageUrl = validator.isURL(image) ? image : `${baseUrl}${image}`;

  return (
    <>
      {/* ========================================= */}
      {/* meta tags */}
      {/* ========================================= */}
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type,
          title,
          site_name: 'Big Dipper',
          url: currentPath,
          description,
          images: [
            {
              url: imageUrl,
              alt: imageAlt ?? description,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'msapplication-TileColor',
            content: '#da532c',
          },
          {
            name: 'msapplication-config',
            content: `${baseUrl}/images/icons/browserconfig.xml`,
          },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
        ]}
      />
      {/* ========================================= */}
      {/* ld schema */}
      {/* ========================================= */}

      {/* ========================================= */}
      {/* body */}
      {/* ========================================= */}
      <div className={classnames(classes.root, className)}>
        {/* ========================================= */}
        {/* desktop nav start */}
        {/* ========================================= */}
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
              toggleNetwork: desktopHook.toggleNetwork,
            },
            header,
            language,
            themeMode,
            searchBar,
          }}
        />
        {/* ========================================= */}
        {/* desktop nav end */}
        {/* ========================================= */}
        {/* ========================================= */}
        {/* mobile nav start */}
        {/* ========================================= */}
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
            toggleNetwork: mobileHook.openNetwork,
            selectedNetwork,
          }}
          searchBar={searchBar}
        />
        {/* ========================================= */}
        {/* mobile nav end */}
        {/* ========================================= */}
        {/* ========================================= */}
        {/* content start */}
        {/* ========================================= */}
        <div
          className={classnames('children-wrapper', {
            desktopOpen: desktopHook.isMenuOpen,
          })}
        >
          {children}
        </div>
        {/* ========================================= */}
        {/* content end */}
        {/* ========================================= */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
