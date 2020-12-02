import React, { useState } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import { useMarketHook } from '@hooks';
import { useBlocksHook } from './hooks';
import { useGetStyles } from './styles';

const Blocks = () => {
  const { t } = useTranslation(['blocks', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useBlocksHook();
  const { classes } = useGetStyles();
  // ============= testing
  const [items, setItems] = useState(20);
  const loadMore = () => {
    console.log('loading more');
    setTimeout(() => {
      if (items < 40) {
        setItems(items + 20);
      }
    }, 1500);
  };
  // ============== testing end

  const genBlocks = () => {
    const results = [];
    for (let i = 0; i < items; i++) {
      results.push(
        <div
          key={i}
          style={{
            height: 100, border: '1px solid black',
          }}
        >
          {' '}
          hello world
        </div>,
      );
    }

    return results;
  };
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
        <div className={classnames('data-blocks')}>
          <DataBlocksHeader />
        </div>
        <div className={classnames('mobile-tablet-header')}>
          <HeaderBarMobile title={t('title')} communityPool={communityPool} />
        </div>
        <div className={classnames('blocks-content')}>
          {/* blocks table */}
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            {genBlocks()}
          </InfiniteScroll>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Blocks;
