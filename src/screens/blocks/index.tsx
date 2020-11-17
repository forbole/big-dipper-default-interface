import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { Layout } from '@components';
import { useBlocksHook } from './hooks';
import { useGetStyles } from './styles';

const Blocks = () => {
  const { t } = useTranslation(['blocks', 'common']);
  const { handleSearchbarSubmit } = useBlocksHook();
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
          data blocks
        </div>
        <div className={classnames('content-container')}>
          <div className={classnames('mobile-tablet-header')}>
            mobile tablet header
          </div>
          <div className={classnames('blocks-content')}>
            blocks table
          </div>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Blocks;