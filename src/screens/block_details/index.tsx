import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBarDesktop,
  DataBlocksHeader,
  HeaderBarMobile,
} from '@components';
import { useMarketHook } from '@hooks';
import { useValidatorDetailsHook } from './hooks';
import { useGetStyles } from './styles';
import { Activities } from './components';

const BlockDetails = () => {
  const { t } = useTranslation(['blocks', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useValidatorDetailsHook();
  const { classes } = useGetStyles();
  return (
    <Layout
      header={(
        <HeaderBarDesktop title={t('subTitle')} communityPool={communityPool} />
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
        <div className={classnames('block-details')}>
          block details
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
