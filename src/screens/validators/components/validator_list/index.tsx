import React from 'react';
import classnames from 'classnames';
// import { Search } from '@material-ui/icons';
import InfiniteScroll from 'react-infinite-scroller';
import {
  ValidatorListMobile, ValidatorListDesktop,
} from '@forbole/big-dipper-default-ui';
import { useTranslation } from 'i18n';
import {
  Tab,
  Tabs,
  // InputAdornment,
  // OutlinedInput,
} from '@material-ui/core';
import { useGetScreenSizeHook } from '@hooks';
import {
  TabPanel, InfiniteLoader,
} from '@components';
import {
  useDesktopOnlyStyles,
  useMobileOnlyStyles,
} from '@styles';
import { getAllyProps } from '@utils';
import { useValidatorListHook } from './hooks';
import { useGetStyles } from './styles';
import { getLabels } from './utils';

const ValidatorList = () => {
  const { t } = useTranslation('validators');
  const { isDesktop } = useGetScreenSizeHook();
  const {
    tabValue,
    handleTabChange,
    // handleSearchChange,
    // handleSearchSubmit,
    // searchValue,
    handleLoadMoreInactive,
    handleRowClick,
    validators,
  } = useValidatorListHook(t);

  const { classes } = useGetStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();

  // ===========================
  // ui data parse
  // ===========================
  const labels = getLabels(t);
  // const placeholderValue = tabValue === 0
  //   ? t('searchActiveValidator')
  //   : t('searchInactiveValidator');
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
        {/* <form
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
        </form> */}
      </div>
      {/* =================================== */}
      {/* active */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={0}>
        <div className={classnames('validator-list__data-container', 'validator-list__active')}>
          <ValidatorListMobile
            className={classnames(mobileOnlyStyles.root)}
            data={validators.active.mobile}
            labels={labels}
            onClick={handleRowClick}
          />
          <ValidatorListDesktop
            onClick={handleRowClick}
            className={classnames(desktopOnlyStyles.root)}
            data={validators.active.desktop}
            labels={labels}
          />
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* inactive */}
      {/* =================================== */}
      <TabPanel value={tabValue} index={1}>
        <InfiniteScroll
          pageStart={0}
          loadMore={handleLoadMoreInactive}
          hasMore={validators.inactive.total > validators.inactive.currentCount}
          loader={<InfiniteLoader key={0} />}
        >
          <div className={classnames('validator-list__data-container', 'validator-list__inactive')}>
            <ValidatorListMobile
              className={classnames(mobileOnlyStyles.root)}
              onClick={handleRowClick}
              labels={labels}
              data={validators.inactive.mobile}
            />
            <ValidatorListDesktop
              inactive
              onClick={handleRowClick}
              className={classnames(desktopOnlyStyles.root)}
              data={validators.inactive.desktop}
              labels={labels}
            />
          </div>
        </InfiniteScroll>
      </TabPanel>
    </div>
  );
};

export default ValidatorList;
