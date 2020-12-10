import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import {
  LatestActivitiesMobile,
  LatestActivitiesDesktop,
} from 'big-dipper-default-ui';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import { useGetScreenSizeHook } from '@hooks';
import {
  TabPanel,
  ActivitiesFilter,
  InfiniteLoader,
} from '@components';
import { getAllyProps } from '@utils';
import {
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
  useLatestActivitiesMobileStyles,
  useLatestActivitiesDesktopStyles,
} from '@styles';
import { useValidatorDetailsHook } from './hooks';
import { useGetStyles } from './styles';
import { getCollapsibleLabels } from './utils';

const PowerActivities = () => {
  const {
    tabValue,
    handleTabChange,
    handleOnFilterCallback,
    state,
    handleLoadMore,
    handleClick,
  } = useValidatorDetailsHook();
  const { t } = useTranslation(['validators', 'activities']);
  const { isDesktop } = useGetScreenSizeHook();
  const { classes } = useGetStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: latestActivitiesMobileStyles } = useLatestActivitiesMobileStyles();
  const { classes: latestActivitiesDesktopStyles } = useLatestActivitiesDesktopStyles();

  const collapsibleLabels = getCollapsibleLabels(t);
  const {
    hasMore,
    data,
  } = state;

  return (
    <div className={classnames(classes.root)}>
      <div className={classnames('flex')}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant={isDesktop ? null : 'fullWidth'}
          scrollButtons="auto"
          aria-label="validator list tabs"
        >
          <Tab disableRipple label={t('powerEvents')} {...getAllyProps(0)} />
          <Tab disableRipple label={t('activities')} {...getAllyProps(1)} />
        </Tabs>
        <ActivitiesFilter
          callback={handleOnFilterCallback}
          className={classnames({
            hide: tabValue === 0,
            show: tabValue === 1,
          })}
        />
      </div>
      {/* =================================== */}
      {/* active */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={0}>
        <div className={classnames('data-container')}>
          power events
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* active */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={1}>
        <div className={classnames('data-container')}>
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
      </TabPanel>
    </div>
  );
};

export default PowerActivities;
