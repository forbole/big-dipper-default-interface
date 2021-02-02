import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import { useTheme } from '@material-ui/core/styles';
import { PowerEvents } from '@forbole/big-dipper-default-ui';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import { useGetScreenSizeHook } from '@hooks';
import {
  TabPanel,
  ActivitiesFilter,
  InfiniteLoader,
  ActivitiesList,
} from '@components';
import { getAllyProps } from '@utils';
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

  // ================================
  // activities
  // ================================
  const activitiesHook = useActivitiesHook();
  const activitiesState = activitiesHook.state;

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
            <ActivitiesList
              data={activitiesState.data}
              onClick={activitiesHook.handleClick}
            />
          </InfiniteScroll>
        </div>
      </TabPanel>
    </div>
  );
};

export default PowerActivities;
