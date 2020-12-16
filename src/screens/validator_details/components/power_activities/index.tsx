import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import { useTheme } from '@material-ui/core/styles';
import {
  LatestActivitiesMobile,
  LatestActivitiesDesktop,
  PowerEvents,
} from 'big-dipper-default-ui';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import {
  useGetScreenSizeHook, useActivityLabelsHook,
} from '@hooks';
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
import {
  useValidatorDetailsHook,
  useActivitiesHook,
  usePowerEventsHook,
} from './hooks';
import { useGetStyles } from './styles';

const PowerActivities = () => {
  const theme:any = useTheme();
  const {
    tabValue,
    handleTabChange,
  } = useValidatorDetailsHook();
  const { t } = useTranslation(['validators', 'activities']);
  const { isDesktop } = useGetScreenSizeHook();
  const { classes } = useGetStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: latestActivitiesMobileStyles } = useLatestActivitiesMobileStyles();
  const { classes: latestActivitiesDesktopStyles } = useLatestActivitiesDesktopStyles();

  // ================================
  // activities
  // ================================
  const activitiesHook = useActivitiesHook();
  const activitiesState = activitiesHook.state;
  const { collapsibleLabels } = useActivityLabelsHook();

  // ================================
  // events
  // ================================
  const powerEventsHook = usePowerEventsHook();
  const powerEventsState = powerEventsHook.state;

  return (
    <div className={classnames(classes.root)}>
      <div className={classnames('tab__flex')}>
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
          callback={activitiesHook.handleOnFilterCallback}
          className={classnames({
            hide: tabValue === 0,
            show: tabValue === 1,
          })}
        />
      </div>
      {/* =================================== */}
      {/* power events */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={0}>
        <div className={classnames('data-container')}>
          <InfiniteScroll
            pageStart={0}
            loadMore={powerEventsHook.handleLoadMore}
            hasMore={powerEventsState.hasMore}
            loader={<InfiniteLoader key={0} />}
          >
            <PowerEvents
              desktop={theme?.breakpoints?.values?.tablet}
              data={powerEventsState.data}
            />
          </InfiniteScroll>
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* activities */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={1}>
        <div className={classnames('data-container')}>
          {/* ================================ */}
          {/* activity table */}
          {/* ================================ */}
          <InfiniteScroll
            pageStart={0}
            loadMore={activitiesHook.handleLoadMore}
            hasMore={activitiesState.hasMore}
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
              data={activitiesState.data}
              onClick={activitiesHook.handleClick}
            />
            {/* ================================ */}
            {/* desktop */}
            {/* ================================ */}
            <LatestActivitiesDesktop
              collapsibleLabels={collapsibleLabels}
              data={activitiesState.data}
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
