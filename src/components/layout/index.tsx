import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import validator from 'validator';
import Head from 'next/head';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  MobileNav,
  DesktopNav,
} from 'big-dipper-internal-ui';
import { Footer } from '@components';
import { ThemeModeContext } from '@contexts';
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
  } = props;

  let { image = '/images/icons/favicon-32x32.png' } = props;

  // ============================
  // Global props
  // ============================
  const {
    getThemeMode,
    toggleThemeMode,
    getCurrentLanguage,
    changeLanguage,
  } = useContext(ThemeModeContext);

  const windowSize = useGetScreenSizeHook();
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
  const { networks } = useNetworkHook();
  const networkItems = getNetworksComponent(networks);
  const selectedNetwork = {
    online: true,
    value: chainConfig.network,
    iconSrc: chainConfig.icon,
  };
  // ============================
  // Menu
  // ============================
  const menuItems = getNavComponents(t);
  // ============================
  // Meta Tags
  // ============================
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const currentPath = `${process.env.NEXT_PUBLIC_URL}${router.asPath}`;
  if (!validator.isURL(image)) {
    image = `${baseUrl}${image}`;
  }
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
              url: image,
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
      {/* other header tags */}
      {/* ========================================= */}
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href={`${baseUrl}/images/icons/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${baseUrl}/images/icons/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${baseUrl}/images/icons/favicon-16x16.png`} />
        <link rel="manifest" href={`${baseUrl}/images/icons/site.webmanifest`} />
        <link rel="mask-icon" href={`${baseUrl}/images/icons/safari-pinned-tab.svg`} color="#5bbad5" />
        <link rel="shortcut icon" href={`${baseUrl}/images/icons/favicon.ico`} />
      </Head>
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
