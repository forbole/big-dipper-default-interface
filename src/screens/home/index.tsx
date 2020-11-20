import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  DataBlocksHeader,
  HeaderBar,
} from '@components';
import { LatestBlocks } from './components';
import { useHomeHook } from './hooks';
import { useGetStyles } from './styles';

const Home = () => {
  const { t } = useTranslation(['home', 'common']);
  const { handleSearchbarSubmit } = useHomeHook();
  const { classes } = useGetStyles();
  return (
    <Layout
      header={(
        <HeaderBar title={t('title')} />
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
          data graphs
        </div>
        {/* stabilities start */}
        <div className={classnames('stablities')}>
          stabilities
        </div>
        {/* consensus start */}
        <div className={classnames('consensus')}>
          consensus
        </div>
        {/* blocks start */}
        <div className={classnames('latest-blocks')}>
          <LatestBlocks />
        </div>
        {/* latest activities start */}
        <div className={classnames('latest-activites')}>
          latest activites
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Home;
