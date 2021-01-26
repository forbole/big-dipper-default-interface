import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import {
  useMarketHook,
  useSearchbarSubmitHook,
} from '@hooks';
import { useGetStyles } from './styles';
import { ValidatorList } from './components';

const Validators = () => {
  const { t } = useTranslation(['validators', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();

  const { classes } = useGetStyles();
  return (
    <Layout
      className={classes.layout}
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
          <HeaderBarMobile title={t('subTitle')} communityPool={communityPool} />
        </div>
        <div className={classnames('validators-content')}>
          <ValidatorList />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Validators;
