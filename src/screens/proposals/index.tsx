import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  useMarketHook,
  useSearchbarSubmitHook,
} from '@hooks';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import {
  ProposalList, Toggle,
} from './components';
import { useProposalHook } from './hooks';
import { useGetStyles } from './styles';

const Proposals = () => {
  const { t } = useTranslation(['proposals', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
  const {
    handleChange,
    isToggled,
    handleLoadMore,
    state,
    handleClick,
  } = useProposalHook();
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
          <Toggle
            isToggled={isToggled}
            handleChange={handleChange}
            showAll={t('showAll')}
          />
        </div>
        <div className={classnames('proposalList')}>
          <ProposalList
            handleClick={handleClick}
            state={state}
            handleLoadMore={handleLoadMore}
            isToggled={isToggled}
            proposerDisplay={t('proposerDisplay')}
          />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Proposals;
