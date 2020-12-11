import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import { useMarketHook } from '@hooks';
import { useGetStyles } from './styles';
import { useValidatorDetailsHook } from './hooks';
import {
  Info, PowerActivities, StakingActivities,
} from './components';

const ValidatorDetails = () => {
  const { t } = useTranslation(['validators', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useValidatorDetailsHook();
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
        <div className={classnames('validator-bio')}>
          validators bio
        </div>
        <div className={classnames('validator-info')}>
          <Info />
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
          <StakingActivities />
        </div>
        <div className={classnames('events-and-activities')}>
          <PowerActivities />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default ValidatorDetails;
