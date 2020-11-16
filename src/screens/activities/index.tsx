import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import {
  Layout,
  DataBlocksHeader,
} from '@components';
import { useActivitiesHook } from './hooks';
import { useGetStyles } from './styles';

const Activities = () => {
  const { t } = useTranslation(['activities', 'common']);
  const { handleSearchbarSubmit } = useActivitiesHook();
  const { classes } = useGetStyles();
  return (
    <Layout
      header={(
        <DesktopHeaderBar
          title={t('title')}
          market={[
            {
              key: 'Price',
              value: '$2.75',
            },
            {
              key: 'Market Cap',
              value: '$515,555.75',
            },
            {
              key: 'Inflation',
              value: '7.95%',
            },
            {
              key: 'Community Pool',
              value: '3,400,000 ATOM',
            },
          ]}
        />
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
        <div className={classnames('content-container')}>
          <div className={classnames('mobile-tablet-header')}>
            mobile tablet header
          </div>
          <div className={classnames('activities-content')}>
            Activities table
          </div>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Activities;
