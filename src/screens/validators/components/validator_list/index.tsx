import React from 'react';
import classnames from 'classnames';
import { Search } from '@material-ui/icons';
import {
  ValidatorListMobile, ValidatorListDesktop,
} from 'big-dipper-default-ui';
import { useTranslation } from 'i18n';
import {
  Tab,
  Tabs,
  InputAdornment,
  OutlinedInput,
} from '@material-ui/core';
import { useGetScreenSizeHook } from '@hooks';
import { TabPanel } from '@components';
import {
  useDesktopOnlyStyles,
  useMobileOnlyStyles,
} from '@styles';
import { getAllyProps } from '@utils';
import { useValidatorListHook } from './hooks';
import { useGetStyles } from './styles';
import {
  dummyActiveMobileData,
  dummyActiveDesktopData,
  dummyInactiveMobileData,
  dummyInactiveDesktopData,
  dummyLabels,
} from './utils';

const ValidatorList = () => {
  const { t } = useTranslation('validators');
  const { isDesktop } = useGetScreenSizeHook();
  const {
    tabValue,
    handleTabChange,
    handleSearchChange,
    handleSearchSubmit,
    searchValue,
    handleRowClick,
  } = useValidatorListHook();
  const { classes } = useGetStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const placeholderValue = tabValue === 0
    ? t('searchActiveValidator')
    : t('searchInactiveValidator');
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
          <Tab disableRipple label={t('active')} {...getAllyProps(0)} />
          <Tab disableRipple label={t('inactive')} {...getAllyProps(1)} />
        </Tabs>
        <form
          onSubmit={handleSearchSubmit}
          className={classnames(desktopOnlyStyles.root)}
        >
          <OutlinedInput
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={placeholderValue}
            startAdornment={(
              <InputAdornment position="start">
                <Search fontSize="small" className="outline-input__icon" />
              </InputAdornment>
              )}
          />
        </form>
      </div>
      {/* =================================== */}
      {/* active */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={0}>
        <div className={classnames('validator-list__data-container')}>
          {/* <ActiveList /> */}
          <ValidatorListMobile
            className={classnames(mobileOnlyStyles.root)}
            data={dummyActiveMobileData}
            labels={dummyLabels}
            onClick={handleRowClick}
          />
          <ValidatorListDesktop
            onClick={handleRowClick}
            className={classnames(desktopOnlyStyles.root)}
            data={dummyActiveDesktopData}
            labels={dummyLabels}
          />
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* inactive */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={1}>
        <div className={classnames('validator-list__data-container')}>
          <ValidatorListMobile
            className={classnames(mobileOnlyStyles.root)}
            onClick={handleRowClick}
            labels={dummyLabels}
            data={dummyInactiveMobileData}
          />
          <ValidatorListDesktop
            inactive
            onClick={handleRowClick}
            className={classnames(desktopOnlyStyles.root)}
            data={dummyInactiveDesktopData}
            labels={dummyLabels}
          />
        </div>
      </TabPanel>
    </div>
  );
};

export default ValidatorList;
