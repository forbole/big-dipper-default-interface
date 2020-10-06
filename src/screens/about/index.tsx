
import React from 'react';
import { useTranslation } from 'i18n';
import NextLink from 'next/link';
import classnames from 'classnames';
import {
  Example, Layout,
} from '@components';
import {
  Typography,
  Button,
} from '@material-ui/core';
import { useHomeHook } from './hooks';
import { useGetStyles } from './styles';

const About = () => {


  const { t } = useTranslation('about');
  const { classes } = useGetStyles();
  const {
    data,
    loading,
    error,
  } = useHomeHook();

  if (error) {
    console.log('there is an error');
  }

  return (
    <Layout>
<div
        className={classnames(classes.tabletAndUp)}
        >
      <div

        className={classes.title}

      ><span>{t('aboutbigDipper')

      }</span>

      </div>

      <div
        className={classes.text}

      ><span>{t('paragraph')}</span>
      </div>

      </div>

      <div
        className={classnames(classes.mobileOnly)}
      >
        <div
          className={classes.titleMobile}

        ><span>{t('aboutbigDipper')}</span>
        </div>

        <div
          className={classes.textMobile}

        ><span>{t('paragraph')}</span>
        </div>
      </div>
      <Example />

    </Layout>
  );
};

export default About;
