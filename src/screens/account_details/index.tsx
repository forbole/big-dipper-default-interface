import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import {
  useMarketHook, useSearchbarSubmitHook,
} from '@hooks';
import { useGetStyles } from './styles';
import {
  Activities,
  StakingActivities,
  Detail,
} from './components';

const AccountDetails = () => {
  const { t } = useTranslation(['accounts', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
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
          {/* <Detail address="desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d" /> */}
          <Detail />
        </div>
        <div className={classnames('account-staking')}>
          <StakingActivities />
        </div>
        <div className={classnames('account-activities')}>
          <Activities />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default AccountDetails;
