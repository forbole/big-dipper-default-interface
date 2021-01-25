import React from 'react';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import {
  useMarketHook,
  useSearchbarSubmitHook,
} from '@hooks';
import { useGetStyles } from './styles';
import {
  Deposit,
  Info,
  Vote,
} from './components';

const ProposalDetails = () => {
  const { t } = useTranslation(['proposals', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
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
        <div className={classnames('mobile-tablet-header')}>
          <HeaderBarMobile title={t('subTitle')} communityPool={communityPool} />
        </div>
        <div className={classnames('proposal-details')}>
          <Info />
        </div>
        <div className={classnames('proposal-vote')}>
          <Vote />
        </div>
        <div className={classnames('proposal-deposits')}>
          <Deposit />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default ProposalDetails;
