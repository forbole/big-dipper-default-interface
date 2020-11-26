import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBar,
} from '@components';
import { useValidatorDetailsHook } from './hooks';
import { useGetStyles } from './styles';

const ValidatorDetails = () => {
  const { t } = useTranslation(['validators', 'common']);
  const { handleSearchbarSubmit } = useValidatorDetailsHook();
  const { classes } = useGetStyles();
  return (
    <Layout
      header={(
        <HeaderBar title={t('subTitle')} />
      )}
      searchBar={{
        searchBarPlaceholder: t('common:searchbar'),
        searchBarCallback: handleSearchbarSubmit,
      }}
    >
      {/* ===================================== */}
      {/* content start */}
      {/* ===================================== */}
      <div className={classnames(classes.root)}>

        <div className={classnames('mobile-tablet-header')}>
          mobile tablet header
        </div>
        <div className={classnames('validator-bio')}>
          validators bio
        </div>
        <div className={classnames('validator-info')}>
          validators info
        </div>
        <div className={classnames('validator-voting-power')}>
          validators voting power
        </div>
        <div className={classnames('missed-blocks')}>
          missed blocks
        </div>
        <div className={classnames('potential')}>
          potential
        </div>
        <div className={classnames('staking')}>
          staking chart
        </div>
        <div className={classnames('events-and-activities')}>
          power events and activities
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default ValidatorDetails;
