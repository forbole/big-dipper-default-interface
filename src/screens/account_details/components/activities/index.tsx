import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import InfiniteScroll from 'react-infinite-scroller';
import {
  LatestActivitiesMobile,
  LatestActivitiesDesktop,
} from 'big-dipper-default-ui';
import {
  ActivitiesFilter,
  InfiniteLoader,
} from '@components';
import {
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
  useLatestActivitiesMobileStyles,
  useLatestActivitiesDesktopStyles,
} from '@styles';
import { useActivityLabelsHook } from '@hooks';
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
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: latestActivitiesMobileStyles } = useLatestActivitiesMobileStyles();
  const { classes: latestActivitiesDesktopStyles } = useLatestActivitiesDesktopStyles();
  const {
    hasMore,
    data,
  } = state;
  const { collapsibleLabels } = useActivityLabelsHook();
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
        <LatestActivitiesDesktop
          collapsibleLabels={collapsibleLabels}
          data={data}
          className={classnames(
            desktopOnlyStyles.root,
            latestActivitiesDesktopStyles.root,
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Activities;
