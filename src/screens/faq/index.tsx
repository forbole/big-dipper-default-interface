import React from 'react';
import { useTranslation } from 'i18n';
import {
  Layout, MaxWidthContainer, MaxWidthContent,
} from '@components';
import { Grid } from 'big-dipper-internal-ui';
import { useGetStyles } from './styles';
import getFaqDetails from './utils';

const Faq = () => {
  const { t } = useTranslation('faq');
  const { classes } = useGetStyles();

  return (
    <Layout>
      <MaxWidthContainer>
        <MaxWidthContent className={classes.root}>
          <h1 className={classes.title}>
            {t('FAQ')}
          </h1>
          <p className={classes.context}>
            {t('context')}
            <a
              href="mailto:support@forbole.com"
              className={classes.desktopOnly}
            >
              {t('email')}
            </a>
          </p>
          <div className={classes.linkContainer}>
            <a
              href="mailto:support@forbole.com"
              style={{
                color: '#1D86FF',
              }}
            >
              {t('email')}
            </a>
          </div>

          <Grid container spacing={2}>
            {getFaqDetails().map((x, i) => {
              return (
                <Grid key={i} item xs={12} desktop={6}>
                  <h2 className={classes.subTitle}>
                    {x.question}
                  </h2>
                  <p className={classes.paragraph}>
                    {x.ans}
                  </p>
                </Grid>
              );
            })}
          </Grid>
        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default Faq;
