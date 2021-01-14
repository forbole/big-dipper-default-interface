import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { useRouter } from 'next/router';
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
import {
  Activities,
  BlockDetailsTable,
} from './components';

const BlockDetails = () => {
  const { t } = useTranslation(['blocks', 'common']);
  const router = useRouter();
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
  const { classes } = useGetStyles();
  const title = `${t('subTitle')} ${numeral(router?.query?.block).format('0,0')}`;
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
          <BlockDetailsTable />
        </div>
        <div className={classnames('block-activities')}>
          <Activities />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>

  );
};

export default BlockDetails;
