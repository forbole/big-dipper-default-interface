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
  // ValidatorStakingDesktop,
  UserStakingMobile,
} from 'big-dipper-default-ui';
import {
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
} from '@styles';
import { useStakingActivitiesHook } from './hooks';
import { useGetStyles } from './styles';
import {
  dummyMobileData,
  // getLabels,
  // dummyValidatorStaking,
} from './utils';

const StakingActivities = () => {
  const {
    tabValue,
    handleTabChange,
  } = useStakingActivitiesHook();
  const { t } = useTranslation('accounts');

  // ==================================
  // styles
  // ==================================
  const { classes } = useGetStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();

  // ==================================
  // labels
  // ==================================
  // const labels = getLabels(t);

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
          <UserStakingMobile
            className={classnames('user-staking', mobileOnlyStyles.root)}
            data={dummyMobileData}
          />
          {/* ================================ */}
          {/* desktop */}
          {/* ================================ */}
          {/* <ValidatorStakingDesktop
            className={classnames('user-staking', desktopOnlyStyles.root)}
            labels={labels}
            data={dummyValidatorStaking}
          /> */}
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
          <UserStakingMobile
            className={classnames('user-staking', mobileOnlyStyles.root)}
            data={dummyMobileData}
          />
          {/* ================================ */}
          {/* desktop */}
          {/* ================================ */}
          {/* <ValidatorStakingDesktop
            className={classnames('user-staking', desktopOnlyStyles.root)}
            labels={redelegationLabels}
            data={dummyValidatorRedelegations}
          /> */}
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
          <UserStakingMobile
            className={classnames('user-staking', mobileOnlyStyles.root)}
            data={dummyMobileData}
          />
          {/* ================================ */}
          {/* desktop */}
          {/* ================================ */}
          {/* <ValidatorStakingDesktop
            className={classnames('user-staking', desktopOnlyStyles.root)}
            labels={labels}
            data={dummyValidatorStaking}
          /> */}
        </div>
      </TabPanel>
    </div>
  );
};

export default StakingActivities;
