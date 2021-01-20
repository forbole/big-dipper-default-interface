import React from 'react';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import {
  ActivitiesFilter,
  InfiniteLoader,
  ActivitiesList,
} from '@components';
import { useActivitiesHook } from './hooks';
import { useGetStyles } from './styles';

const Activities = () => {
  const {
    handleOnFilterCallback,
    state,
    handleLoadMore,
    handleClick,
  } = useActivitiesHook();
  const { t } = useTranslation(['accounts', 'activities']);
  const { classes } = useGetStyles();

  const {
    hasMore,
    data,
  } = state;

  return (
    <div className={classes.root}>
      <div className="header__container">
        <h2>{t('latestActivities')}</h2>
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
        hasMore={hasMore}
        loader={<InfiniteLoader key={0} />}
      >
        <ActivitiesList
          data={data}
          onClick={handleClick}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Activities;
