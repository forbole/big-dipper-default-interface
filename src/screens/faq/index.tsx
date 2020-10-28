import React from 'react';
import { useTranslation } from 'i18n';
import {
  Layout, MaxWidthContainer, MaxWidthContent,
} from '@components';
<<<<<<< HEAD
import { StyledGrid } from 'big-dipper-internal-ui';
=======
import Grid from '@material-ui/core/Grid';
>>>>>>> 9166446999c0047bcc61389abc4b66e4dd9253c9
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
<<<<<<< HEAD

          <StyledGrid container spacing={2}>
            {getFaqDetails().map((x, i) => {
              return (
                <StyledGrid key={i} item xs={12} desktop={6}>
=======
          <Grid container spacing={2}>
            {getFaqDetails().map((x, i) => {
              return (
                <Grid key={i} item xs={12} lg={6}>
>>>>>>> 9166446999c0047bcc61389abc4b66e4dd9253c9
                  <h2 className={classes.subTitle}>
                    {x.question}
                  </h2>
                  <p className={classes.paragraph}>
                    {x.ans}
                  </p>
<<<<<<< HEAD
                </StyledGrid>
              );
            })}
          </StyledGrid>
=======
                </Grid>
              );
            })}
          </Grid>
>>>>>>> 9166446999c0047bcc61389abc4b66e4dd9253c9
        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default Faq;
