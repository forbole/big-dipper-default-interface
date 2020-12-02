import React from 'react';
import classnames from 'classnames';
import {
  LatestBlocksMobile,
  LatestBlocksDesktop,
} from 'big-dipper-default-ui';
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
import {
  useLatestBlocksDesktopStyles,
  useLatestBlocksMobileStyles,
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
} from '@styles';
import { useBlocksHook } from './hooks';
import { useGetStyles } from './styles';
import {
  getLabelsMobile, getLabelsDesktop,
} from './utils';

const Blocks = () => {
  const { t } = useTranslation(['blocks', 'common']);
  const { communityPool } = useMarketHook();
  const { classes } = useGetStyles();
  const { classes: latestBlocksDesktopStyles } = useLatestBlocksDesktopStyles();
  const { classes: latestBlocksMobileStyles } = useLatestBlocksMobileStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();

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
  const labelsDesktop = getLabelsDesktop(t);

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
        <div className={classnames('data-blocks', desktopOnlyStyles.root)}>
          <DataBlocksHeader />
        </div>
        <div className={classnames('mobile-tablet-header')}>
          <HeaderBarMobile title={t('title')} communityPool={communityPool} />
        </div>
        <div className={classnames('blocks-content')}>
          <h2 className={classnames('blocks-content__header--desktop', desktopOnlyStyles.root)}>
            {t('latestBlocks')}
          </h2>
          {/* blocks table */}
          <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={hasMore}
            loader={<InfiniteLoader key={0} />}
          >
            {/* ================================ */}
            {/* mobile */}
            {/* ================================ */}
            <LatestBlocksMobile
              className={classnames(latestBlocksMobileStyles.root, mobileOnlyStyles.root)}
              labels={labelsMobile}
              data={data}
              onClick={handleClick}
            />
            {/* ================================ */}
            {/* desktop */}
            {/* ================================ */}
            <LatestBlocksDesktop
              className={classnames(latestBlocksDesktopStyles.root, desktopOnlyStyles.root)}
              labels={labelsDesktop}
              data={data}
              onClick={handleClick}
            />
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
