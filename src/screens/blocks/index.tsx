import React from 'react';
import classnames from 'classnames';
import { LatestBlocksMobile } from 'big-dipper-default-ui';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
  InfiniteLoader,
} from '@components';
import { useMarketHook } from '@hooks';
import { useBlocksHook } from './hooks';
import { useGetStyles } from './styles';
import { getLabelsMobile } from './utils';

const Blocks = () => {
  const { t } = useTranslation(['blocks', 'common']);
  const { communityPool } = useMarketHook();
  const { classes } = useGetStyles();
  const {
    handleSearchbarSubmit,
    handleLoadMore,
    handleClick,
    state,
  } = useBlocksHook();
  const {
    hasMore, data,
  } = state;
  const labelsMobile = getLabelsMobile(t);

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
          {/* ================================ */}
          {/* mobile */}
          {/* ================================ */}
          <div className={classnames(classes.mobile)}>
            <InfiniteScroll
              pageStart={0}
              loadMore={handleLoadMore}
              hasMore={hasMore}
              loader={<InfiniteLoader key={0} />}
            >
              <LatestBlocksMobile
                labels={labelsMobile}
                data={data}
                onClick={handleClick}
              />
            </InfiniteScroll>
          </div>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Blocks;
