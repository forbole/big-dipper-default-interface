import React from 'react';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import { LatestActivities } from 'big-dipper-default-ui';
import {
  ActivitiesFilter,
  InfiniteLoader,
} from '@components';
import { useLatestActivitiesStyles } from '@styles';
import { useActivitiesHook } from './hooks';
import { useGetStyles } from './styles';

const Activities = () => {
  const {
    handleOnFilterCallback,
    state,
    handleLoadMore,
    handleClick,
  } = useActivitiesHook();
  const { t } = useTranslation(['blocks', 'activities']);
  const { classes } = useGetStyles();
  const { classes: latestActivitiesStyles } = useLatestActivitiesStyles();

  const {
    total,
    data,
  } = state;

  return (
    <div className={classes.root}>
      <div className="header__container">
        <h2>{t('activities')}</h2>
        <ActivitiesFilter
          callback={handleOnFilterCallback}
        />
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
        <LatestActivities
          className={latestActivitiesStyles.root}
          transactions={data}
          onClick={handleClick}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Activities;
