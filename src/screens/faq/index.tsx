import React from 'react';
import { useTranslation } from 'i18n';
import {
  Layout, MaxWidthContainer, MaxWidthContent,
} from '@components';
import Grid from '@material-ui/core/Grid';
import { useGetStyles } from './styles';

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
          <a
            href="mailto:support@forbole.com"
            className={classes.link}
          >
            {t('email')}
          </a>
          <Grid container spacing={4}
            breakpoints={{ lg: 1200, md: 1000, sm: 768, xs: 480, xxs: 0 }}>
            <Grid item sm={12} md={6}>
              <h2 className={classes.subTitle}>
                {t('subTitle1')}
              </h2>
              <p className={classes.paragraph}>
                {t('p1')}
              </p>
            </Grid>
            <Grid item sm={12} md={6}>
              <h2 className={classes.subTitle}>
                {t('subTitle2')}
              </h2>
              <p className={classes.paragraph}>
                {t('p2')}
              </p>
            </Grid>
            <Grid item sm={12} md={6}>
              <h2 className={classes.subTitle}>
                {t('subTitle3')}
              </h2>
              <p className={classes.paragraph}>
                {t('p3')}
              </p>
            </Grid>
            <Grid item sm={12} md={6}>
              <h2 className={classes.subTitle}>
                {t('subTitle4')}
              </h2>
              <p className={classes.paragraph}>
                {t('p4')}
              </p>
            </Grid>
            <Grid item sm={12} md={6}>
              <h2 className={classes.subTitle}>
                {t('subTitle5')}
              </h2>
              <p className={classes.paragraph}>
                {t('p5')}
              </p>
            </Grid>
            <Grid item sm={12} md={6}>
              <h2 className={classes.subTitle}>
                {t('subTitle6')}
              </h2>
              <p className={classes.paragraph}>
                {t('p6')}
              </p>
            </Grid>
          </Grid>
          <h2 className={classes.subTitle}>
            {t('subTitle1')}
          </h2>
          <p className={classes.paragraph}>
            {t('p1')}
          </p>
          <h2 className={classes.subTitle}>
            {t('subTitle2')}
          </h2>
          <p className={classes.paragraph}>
            {t('p2')}
          </p>
          <h2 className={classes.subTitle}>
            {t('subTitle3')}
          </h2>
          <p className={classes.paragraph}>
            {t('p3')}
          </p>
        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default Faq;
