import React from 'react';
import { useTranslation } from 'i18n';
import { Layout, MaxWidthContainer, MaxWidthContent } from '@components';
import { useGetStyles } from './styles';

const About = () => {
  const { t } = useTranslation('about');
  const { classes } = useGetStyles();

  return (
    <Layout>
      <MaxWidthContainer>
        <MaxWidthContent>
          <div>
            <h1 style={{ fontWeight: 'normal' }}>
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
        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default About;
