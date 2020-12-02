import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import {
  LatestActivitiesMobile,
  // LatestActivitiesDesktop,
} from 'big-dipper-default-ui';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
  InfiniteLoader,
} from '@components';
import {
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
  useLatestActivitiesMobileStyles,
} from '@styles';
import { useMarketHook } from '@hooks';
import { useActivitiesHook } from './hooks';
import { useGetStyles } from './styles';

const Activities = () => {
  const { t } = useTranslation(['activities', 'common']);
  const { communityPool } = useMarketHook();
  const {
    handleSearchbarSubmit,
    handleLoadMore,
    handleClick,
    state,
  } = useActivitiesHook();
  const { classes } = useGetStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: latestActivitiesMobileStyles } = useLatestActivitiesMobileStyles();
  const {
    hasMore, data,
  } = state;
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
        <div className={classnames(desktopOnlyStyles.root)}>
          <DataBlocksHeader />
        </div>
        <div className={classnames(mobileOnlyStyles.root)}>
          <HeaderBarMobile title={t('title')} communityPool={communityPool} />
        </div>
        <div className={classnames('activities-content')}>
          <div>filter</div>
          {/* activity table */}
          <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={hasMore}
            loader={<InfiniteLoader key={0} />}
          >
            {/* ================================ */}
            {/* mobile */}
            {/* ================================ */}
            <LatestActivitiesMobile
              className={classnames(
                mobileOnlyStyles.root,
                classes.latestActivitiesMobile,
                latestActivitiesMobileStyles.root,
              )}
              data={data}
              onClick={handleClick}
            />
            {/* ================================ */}
            {/* desktop */}
            {/* ================================ */}
            <div> desktop</div>
          </InfiniteScroll>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Activities;
