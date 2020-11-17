import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  DataBlocksHeader,
  HeaderBar,
} from '@components';
import { useValidatorHook } from './hooks';
import { useGetStyles } from './styles';

const Validators = () => {
  const { t } = useTranslation(['validators', 'common']);
  const { handleSearchbarSubmit } = useValidatorHook();
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
          <div className={classnames('validators-content')}>
            validators table
          </div>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Validators;
