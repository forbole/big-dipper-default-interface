import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Tab, Tabs,
} from '@material-ui/core';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
  TabPanel,
} from '@components';
import { getAllyProps } from '@utils';
import {
  useMarketHook, useGetScreenSizeHook,
} from '@hooks';
import {
  useValidatorHook, useValidatorListHook,
} from './hooks';
import { useGetStyles } from './styles';

const Validators = () => {
  const { t } = useTranslation(['validators', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useValidatorHook();
  const windowSize = useGetScreenSizeHook();
  const {
    tabValue,
    handleTabChange,
    isDesktop,
  } = useValidatorListHook(windowSize);

  const { classes } = useGetStyles();
  return (
    <Layout
      header={(
        <HeaderBarDesktop title={t('title')} communityPool={communityPool} />
      )}
      searchBar={{
        searchBarPlaceholder: t('common:searchbar'),
        searchBarCallback: handleSearchbarSubmit,
      }}
    >
      {/* ===================================== */}
      {/* content start */}
      {/* ===================================== */}
      <div className={classnames(classes.root)}>
        <div className={classnames('data-blocks')}>
          <DataBlocksHeader />
        </div>
        <div className={classnames('mobile-tablet-header')}>
          <HeaderBarMobile title={t('subTitle')} communityPool={communityPool} />
        </div>
        <div className={classnames('validators-content')}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="validator list tabs"
          >
            <Tab disableRipple label="active" {...getAllyProps(0)} />
            <Tab disableRipple label="inactive" {...getAllyProps(1)} />
          </Tabs>
          {/* =================================== */}
          {/* active */}
          {/* =================================== */}
          <TabPanel value={tabValue} index={0}>
            <div className={classnames('validator-list__data-container')}>
              active
            </div>
          </TabPanel>
          {/* =================================== */}
          {/* active */}
          {/* =================================== */}
          <TabPanel value={tabValue} index={1}>
            <div className={classnames('validator-list__data-container')}>
              inactive
            </div>
          </TabPanel>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Validators;
