import React from 'react';
import { useTranslation } from 'i18n';
import {
  Layout, MaxWidthContainer, MaxWidthContent,
} from '@components';
import { useGetStyles } from './styles';

const About = () => {
  const { t } = useTranslation('about');
  const { classes } = useGetStyles();

  return (
    <Layout>
      <MaxWidthContainer>
        <MaxWidthContent>
          <div className={classes.root}>
            <h1 className={classes.title}>
              {t('aboutbigDipper')}
            </h1>
            <p className={classes.text}>
              {t('paragraph')}
            </p>
          </div>
        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default About;
