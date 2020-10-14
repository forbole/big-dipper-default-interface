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
<<<<<<< HEAD
        <MaxWidthContent>
          <div>
            <h1
              style={{
                fontWeight: 'normal',
              }}
            >
              <span className={classes.title}>
                {t('aboutbigDipper')}
              </span>
            </h1>
          </div>
          <div
            className={classes.text}
          >
            <span>
              {t('paragraph')}
            </span>
          </div>
=======
        <MaxWidthContent className={classes.root}>
          <h1 className={classes.title}>
            {t('aboutbigDipper')}
          </h1>
          <p className={classes.text}>
            {t('paragraph')}
          </p>
>>>>>>> 4865141af5ca059a0386b6e103ce0d70b34dea02
        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default About;
