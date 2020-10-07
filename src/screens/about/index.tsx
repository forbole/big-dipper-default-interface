import React from 'react';
import { useTranslation } from 'i18n';
import {
  Example, Layout,
} from '@components';
import { useGetStyles } from './styles';

const About = () => {
  const { t } = useTranslation('about');
  const { classes } = useGetStyles();

  return (
    <Layout>

      <div
        className={classes.title}
      >
        <span>
          {t('aboutbigDipper')}
        </span>
      </div>

      <div
        className={classes.text}
      >
        <span>
          {t('paragraph')}
        </span>
      </div>
      <Example />

    </Layout>
  );
};

export default About;
