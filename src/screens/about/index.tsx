import React from 'react';
import classnames from '@src/screens/home/components/stabilities/node_modules/classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  MaxWidthContainer,
  MaxWidthContent,
} from '@components';
import { useGetStyles } from './styles';

const About = () => {
  const { t } = useTranslation('about');
  const { classes } = useGetStyles();

  return (
    <Layout className={classes.layout}>
      <MaxWidthContainer>
        <MaxWidthContent className={classnames(classes.root)}>
          <h1 className={classes.title}>
            {t('aboutbigDipper')}
          </h1>
          <p className={classnames(classes.text, 'details')}>
            {t('paragraph')}
          </p>
        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default About;
