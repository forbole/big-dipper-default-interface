import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
} from '@components';
import { useMarketHook } from '@hooks';
import {
  LatestBlocks,
  Stabilities,
  LatestActivities,
<<<<<<< HEAD
  Consensus,
=======
  OnlineVotingPower,
>>>>>>> 23f76d340f8520d37a49a1ca41bd4a745416f08f
} from './components';
import { useHomeHook } from './hooks';
import { useGetStyles } from './styles';

const Home = () => {
  const { t } = useTranslation(['home', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useHomeHook();
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
