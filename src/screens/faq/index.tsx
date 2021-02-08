import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout, MaxWidthContainer, MaxWidthContent,
} from '@components';
import { Grid } from '@forbole/big-dipper-internal-ui';
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
          {faqData.map((x) => {
            return (
              <div>
                <h2 className="topic__title">{t(x.topic)}</h2>
                <Grid container spacing={2}>
                  {x.questions.map((question) => {
                    return (
                      <Grid key={question.question} item mobile={12}>
                        <h2 className={classes.subTitle}>
                          {t(question.question)}
                        </h2>
                        <p className={classnames(classes.paragraph, 'details')}>
                          {t(question.ans)}
                        </p>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            );
          })}
        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default Faq;
