import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import { useMarketHook } from '@hooks';
import { useActivitiesHook } from './hooks';
import { useGetStyles } from './styles';

const Activities = () => {
  const { t } = useTranslation(['activities', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useActivitiesHook();
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
          <HeaderBarMobile title={t('title')} communityPool={communityPool} />
        </div>
        <div className={classnames('activities-content')}>
          Activities table
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Activities;
