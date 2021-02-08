import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  MaxWidthContainer,
  MaxWidthContent,
} from '@components';
import { useGetStyles } from './styles';
import {
  intro, items,
} from './utils';

const TermsAndConditions = () => {
  const { t } = useTranslation('t&c');
  const { classes } = useGetStyles();

  return (
    <Layout className={classes.layout}>
      <MaxWidthContainer>
        <MaxWidthContent className={classnames(classes.root)}>
          <h1 className={classes.title}>
            {t('termsAndConditions')}
          </h1>
          <p className={classnames(classes.text, 'intro')}>
            {intro}
          </p>
          {items.map((x, i) => {
            return (
              <div key={i} className={classnames(classes.text, 'container')}>
                <div className={classnames(classes.text, 'topic__title')}>
                  {i + 1}
                  .
                  <p className={classnames(classes.text, 'text')}>{t(x.topic)}</p>
                </div>
                <div>
                  {x.details.map((details, index) => {
                    return (
                      <div key={index} className={classnames(classes.text, 'details_container')}>
                        {index + 1}
                        .
                        <p className={classnames(classes.text, 'text')}>{(details.content)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default TermsAndConditions;
