import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import { LatestActivities as LatestActivitiesComponent } from 'big-dipper-default-ui';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
  InfiniteLoader,
  ActivitiesFilter,
} from '@components';
import {
  useLatestActivitiesStyles,
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
} from '@styles';
import {
  useMarketHook,
  useSearchbarSubmitHook,
} from '@hooks';
import { useActivitiesHook } from './hooks';
import { useGetStyles } from './styles';

const Activities = () => {
  const { t } = useTranslation(['activities', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
  const {
    handleLoadMore,
    handleClick,
    state,
    handleOnFilterCallback,
  } = useActivitiesHook();
  const {
    total,
    data,
  } = state;

  const { classes } = useGetStyles();
  const { classes: latestActivitiesStyles } = useLatestActivitiesStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();

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
          <div className={classnames('content-header')}>
            <h1 className={classnames('content-header__title--desktop', desktopOnlyStyles.root)}>
              {t('latestActivities')}
            </h1>
            <ActivitiesFilter callback={handleOnFilterCallback} />
          </div>
          {/* ================================ */}
          {/* activity table */}
          {/* ================================ */}
          <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={total > data.length}
            loader={<InfiniteLoader key={0} />}
          >
            <LatestActivitiesComponent
              className={latestActivitiesStyles.root}
              transactions={data}
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

export default Activities;
