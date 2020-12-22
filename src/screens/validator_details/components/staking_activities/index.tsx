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
} from 'big-dipper-default-ui';
import {
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
} from '@styles';
import { useTheme } from '@material-ui/core/styles';
import { useStakingActivitiesHook } from './hooks';
import { useGetStyles } from './styles';
import {
  getLabelsDesktop,
  dummyValidatorStaking, dummyValidatorRedelegations, getLabelsRedelegationsDesktop,
} from './utils';

const StakingActivities = () => {
  const {
    tabValue,
    handleTabChange,
  } = useStakingActivitiesHook();
  const { t } = useTranslation('validators');
  const { classes } = useGetStyles();
  const theme: any = useTheme();

  const labelsDesktop = getLabelsDesktop(t);
  const labelsDesktopRedelegations = getLabelsRedelegationsDesktop(t);
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();

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
            data={dummyValidatorStaking}
            tablePaginationColor={theme?.palette?.background?.paper}
          />

          {/* ================================ */}
          {/* desktop */}
          {/* ================================ */}
          <ValidatorStakingDesktop
            className={classnames('validator-staking', desktopOnlyStyles.root)}
            labels={labelsDesktop}
            data={dummyValidatorStaking}
            tablePaginationColor={theme?.palette?.background?.paper}
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
            data={dummyValidatorRedelegations}
            tablePaginationColor={theme?.palette?.background?.paper}

          />

          {/* ================================ */}
          {/* desktop */}
          {/* ================================ */}
          <ValidatorStakingDesktop
            className={classnames('validator-staking', desktopOnlyStyles.root)}
            labels={labelsDesktopRedelegations}
            data={dummyValidatorRedelegations}
            tablePaginationColor={theme?.palette?.background?.paper}
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
            data={dummyValidatorStaking}
            tablePaginationColor={theme?.palette?.background?.paper}
          />

          {/* ================================ */}
          {/* desktop */}
          {/* ================================ */}
          <ValidatorStakingDesktop
            className={classnames('validator-staking', desktopOnlyStyles.root)}
            labels={labelsDesktop}
            data={dummyValidatorStaking}
            tablePaginationColor={theme?.palette?.background?.paper}
          />

        </div>
      </TabPanel>
    </div>
  );
};

export default StakingActivities;
