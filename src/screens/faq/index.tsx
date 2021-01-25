import React from 'react';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
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
  const faqData = getFaqDetails();
  return (
    <Layout className={classes.layout}>
      <MaxWidthContainer>
        <MaxWidthContent className={classes.root}>
          <h1 className={classes.title}>{t('FAQ')}</h1>
          <p className={classnames(classes.context, 'context')}>
            {t('context')}
            &nbsp;
            <a
              className={classnames('mail-link')}
              href="mailto:support@forbole.com"
            >
              {t('email')}
            </a>
          </p>
          <Grid container spacing={2}>
            {faqData.map((x) => {
              return (
                <Grid key={x.question} item mobile={12} desktop={6}>
                  <h2 className={classes.subTitle}>
                    {t(x.question)}
                  </h2>
                  <p className={classnames(classes.paragraph, 'details')}>
                    {t(x.ans)}
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
