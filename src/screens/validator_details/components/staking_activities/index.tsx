import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import { TabPanel } from '@components';
import { getAllyProps } from '@utils';
import {
  ValidatorStakingDesktop, ValidatorStakingMobile,
} from '@forbole/big-dipper-default-ui';
import {
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
} from '@styles';
import { useStakingActivitiesHook } from './hooks';
import { useGetStyles } from './styles';
import {
  getRedelegationLabels,
  getLabels,
} from './utils';

const StakingActivities = () => {
  const {
    tabValue,
    handleTabChange,
    staking,
  } = useStakingActivitiesHook();
  const { t } = useTranslation('validators');

  // ==================================
  // styles
  // ==================================
  const { classes } = useGetStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();

  // ==================================
  // labels
  // ==================================
  const labels = getLabels(t);
  const redelegationLabels = getRedelegationLabels(t);

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
          {/* ================================ */}
          {/* mobile */}
          {/* ================================ */}
          <ValidatorStakingMobile
            className={classnames('validator-staking', mobileOnlyStyles.root)}
            data={staking.delegations}
          />
          {/* ================================ */}
          {/* desktop */}
          {/* ================================ */}
          <ValidatorStakingDesktop
            className={classnames('validator-staking', desktopOnlyStyles.root)}
            labels={labels}
            data={staking.delegations}
          />
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* redelegations */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={1}>
        <div className={classnames('staking__data-container')}>
          {/* ================================ */}
          {/* mobile */}
          {/* ================================ */}
          <ValidatorStakingMobile
            className={classnames('validator-staking', mobileOnlyStyles.root)}
            labels={redelegationLabels}
            data={staking.redelegations}
          />
          {/* ================================ */}
          {/* desktop */}
          {/* ================================ */}
          <ValidatorStakingDesktop
            className={classnames('validator-staking', desktopOnlyStyles.root)}
            labels={redelegationLabels}
            data={staking.redelegations}
          />
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* undelegations */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={2}>
        <div className={classnames('staking__data-container')}>
          {/* ================================ */}
          {/* mobile */}
          {/* ================================ */}
          <ValidatorStakingMobile
            className={classnames('validator-staking', mobileOnlyStyles.root)}
            data={staking.undelegations}
          />
          {/* ================================ */}
          {/* desktop */}
          {/* ================================ */}
          <ValidatorStakingDesktop
            className={classnames('validator-staking', desktopOnlyStyles.root)}
            labels={labels}
            data={staking.undelegations}
          />
        </div>
      </TabPanel>
    </div>
  );
};

export default StakingActivities;
