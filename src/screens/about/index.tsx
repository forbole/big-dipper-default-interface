import React from 'react';
import { useTranslation } from 'i18n';
import { Layout } from '@components';
import { useGetStyles } from './styles';

// Starting point for you
// work on mobile structure
// work on mobile css
// work your way up to tablet -> desktop
// add testing
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

    </Layout>
  );
};

export default About;
