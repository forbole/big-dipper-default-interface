import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { useGetStyles } from './styles';
import { useNotFoundHook } from './hooks';

const NotFound = () => {
  const { t } = useTranslation('404');
  const { classes } = useGetStyles();
  const { handleOnClick } = useNotFoundHook();
  return (
    <>
      <NextSeo
        title={t('title')}
      />
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
        <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/images/icons/favicon.ico" />
      </Head>
      <div className={classnames(classes.root)}>
        <img src="/images/404-unicorn.svg" alt="404 unicorn logo" />
        <div className={classnames('content')}>
          <h3>{t('header')}</h3>
          <p>{t('body')}</p>
          <span className={classnames('redirect')}>
            {t('clickToRedirectOne')}
            <span className={classnames('hover')} onClick={handleOnClick} role="button">
              &nbsp;
              {t('clickToRedirectTwo')}
              &nbsp;
            </span>
            {t('clickToRedirectThree')}
          </span>
        </div>
      </div>
    </>
  );
};

export default NotFound;
