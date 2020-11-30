import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import { useMarketHook } from '@hooks';
import { useAccountDetailsHook } from './hooks';
import { useGetStyles } from './styles';

const AccountDetails = () => {
  const { t } = useTranslation(['accounts', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useAccountDetailsHook();
  const { classes } = useGetStyles();

  return (
    <Layout
      header={(
        <HeaderBarDesktop title={t('subTitle')} communityPool={communityPool} />
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
          <HeaderBarMobile title={t('subTitle')} communityPool={communityPool} />
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
