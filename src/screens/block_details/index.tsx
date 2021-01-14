import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBarDesktop,
  DataBlocksHeader,
  HeaderBarMobile,
} from '@components';
import {
  useMarketHook,
  useSearchbarSubmitHook,
} from '@hooks';
import { useGetStyles } from './styles';
import { useBlockDetailsHook } from './hooks';
import {
  Activities,
  BlockDetailsTable,
} from './components';

const BlockDetails = () => {
  const { t } = useTranslation(['blocks', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
  const {
    state,
    title,
  } = useBlockDetailsHook(t);
  console.log(state, 'my state');
  // ========================
  // styles
  // ========================
  const { classes } = useGetStyles();

  return (
    <Layout
      header={(
        <HeaderBarDesktop title={title} communityPool={communityPool} />
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
          <HeaderBarMobile title={title} communityPool={communityPool} />
        </div>
        <div className={classnames('block-details')}>
          <BlockDetailsTable data={state.blockDetails} />
        </div>
        <div className={classnames('block-activities')}>
          <Activities data={state.blockActivities} />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>

  );
};

export default BlockDetails;
