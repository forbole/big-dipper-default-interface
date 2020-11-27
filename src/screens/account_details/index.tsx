import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBar,
} from '@components';
import { useAccountDetailsHook } from './hooks';
import { useGetStyles } from './styles';

const AccountDetails = () => {
  const { t } = useTranslation(['accounts', 'common']);
  const { handleSearchbarSubmit } = useAccountDetailsHook();
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
          mobile tablet header (dont know if this is needed)
        </div>
        <div className={classnames('account-details')}>
          account details
        </div>
        <div className={classnames('account-staking')}>
          account staking
        </div>
        <div className={classnames('account-activities')}>
          account activities
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default AccountDetails;
