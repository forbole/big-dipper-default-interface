import React from 'react';
import classnames from '@src/screens/home/components/stabilities/node_modules/classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  DataBlocksHeader,
  HeaderBar,
} from '@components';
import { useProposalHook } from './hooks';
import { useGetStyles } from './styles';

const Proposals = () => {
  const { t } = useTranslation(['proposals', 'common']);
  const { handleSearchbarSubmit } = useProposalHook();
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
          <div className={classnames('proposals-content')}>
            Proposals table
          </div>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Proposals;
