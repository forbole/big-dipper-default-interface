import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { useMarketHook } from '@hooks';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import {
  ProposalList, Toggle,
} from './components';
import { useProposalHook } from './components/proposal_list/hooks';
import { useGetStyles } from './styles';

const Proposals = () => {
  const { t } = useTranslation(['proposals', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useProposalHook();
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
        <div className={classnames('toggle')}>
          <div className={classnames('toggleContent')}>
            Show All&nbsp;
            <Toggle />
          </div>
        </div>
        <div className={classnames('proposalList')}>
          <ProposalList />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Proposals;
