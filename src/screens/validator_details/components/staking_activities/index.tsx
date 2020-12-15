import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import { TabPanel } from '@components';
import { getAllyProps } from '@utils';
import { useStakingActivitiesHook } from './hooks';
import { useGetStyles } from './styles';

const StakingActivities = () => {
  const {
    tabValue,
    handleTabChange,
  } = useStakingActivitiesHook();
  const { t } = useTranslation('validators');
  const { classes } = useGetStyles();
  return (
    <div className={classnames(classes.root)}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        scrollButtons="auto"
        aria-label="staking list tabs"
      >
        <Tab disableRipple label={t('delegations')} {...getAllyProps(0)} />
        <Tab disableRipple label={t('redelegations')} {...getAllyProps(1)} />
        <Tab disableRipple label={t('undelegations')} {...getAllyProps(2)} />
      </Tabs>
      {/* =================================== */}
      {/* delegation */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={0}>
        <div className={classnames('staking__data-container')}>
          delegation
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* redelegations */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={1}>
        <div className={classnames('staking__data-container')}>
          redelegations
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* undelegations */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={2}>
        <div className={classnames('staking__data-container')}>
          undelegations
        </div>
      </TabPanel>
    </div>
  );
};

export default StakingActivities;
