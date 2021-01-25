import React from 'react';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
} from '@components';
import {
  useMarketHook,
  useSearchbarSubmitHook,
} from '@hooks';
import {
  LatestBlocks,
  Stabilities,
  LatestActivities,
  Consensus,
  OnlineVotingPower,
} from './components';
import { useGetStyles } from './styles';

const Home = () => {
  const { t } = useTranslation(['home', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
  const { classes } = useGetStyles();
  return (
    <Layout
      header={(
        <HeaderBarDesktop title={t('title')} communityPool={communityPool} />
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
        {/* block start */}
        <DataBlocksHeader />
        {/* graphs start */}
        <div className={classnames('data-graphs')}>
          <OnlineVotingPower />
        </div>
        {/* stabilities start */}
        <div className={classnames('stablities')}>
          <Stabilities />
        </div>
        {/* consensus start */}
        <div className={classnames('consensus')}>
          <Consensus />
        </div>
        {/* blocks start */}
        <div className={classnames('latest-blocks')}>
          <LatestBlocks />
        </div>
        {/* latest activities start */}
        <div className={classnames('latest-activites')}>
          <LatestActivities />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Home;
