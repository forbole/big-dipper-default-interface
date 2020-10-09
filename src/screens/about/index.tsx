import React from 'react';
import { useTranslation } from 'i18n';
import { Layout } from '@components';
import { useGetStyles } from './styles';

const About = () => {
  const { t } = useTranslation('about');
  const { classes } = useGetStyles();

  return (
    <Layout>

      <div
        className={classes.about}
      >

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
      </div>
    </Layout>
  );
};

export default About;
