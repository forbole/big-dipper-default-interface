import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import { useGetScreenSizeHook } from '@hooks';
import {
  TabPanel, ActivitiesFilter,
} from '@components';
import { getAllyProps } from '@utils';
import { useDesktopOnlyStyles } from '@styles';
import { useValidatorDetailsHook } from './hooks';
import { useGetStyles } from './styles';

const PowerActivities = () => {
  const {
    tabValue,
    handleTabChange,
  } = useValidatorDetailsHook();
  const { t } = useTranslation('validators');
  const { isDesktop } = useGetScreenSizeHook();
  const { classes } = useGetStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
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
          className={classnames(desktopOnlyStyles.root, {
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
          activities
        </div>
      </TabPanel>
    </div>
  );
};

export default PowerActivities;
