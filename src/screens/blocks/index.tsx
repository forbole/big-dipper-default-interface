import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  DataBlocksHeader,
  HeaderBar,
} from '@components';
import { useBlocksHook } from './hooks';
import { useGetStyles } from './styles';

const Blocks = () => {
  const { t } = useTranslation(['blocks', 'common']);
  const { handleSearchbarSubmit } = useBlocksHook();
  const { classes } = useGetStyles();
  return (
    <Layout
      header={(
        <HeaderBar title={t('title')} />
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
