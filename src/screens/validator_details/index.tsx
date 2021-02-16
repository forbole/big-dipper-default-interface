import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import {
  useMarketHook,
  useSearchbarSubmitHook,
} from '@hooks';
import { useGetStyles } from './styles';
import {
  Info,
  PowerActivities,
  StakingActivities,
  MissedBlocks,
  Profile,
  VotingPower,
  Potential,
} from './components';

const ValidatorDetails = () => {
  const { t } = useTranslation(['validators', 'common']);
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
        <div className={classnames('validator-bio')}>
          <Profile />
        </div>
        <div className={classnames('validator-info')}>
          <Info />
        </div>
        <div className={classnames('validator-voting-power')}>
          <VotingPower />
        </div>
        <div className={classnames('missed-blocks')}>
          <MissedBlocks />
        </div>
        <div className={classnames('potential')}>
          <Potential />
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
