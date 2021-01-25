import React from 'react';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import { useTranslation } from 'i18n';
import { ActivityDetails as Details } from 'big-dipper-default-ui';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import {
  useMarketHook,
  useGetScreenSizeHook,
  useSearchbarSubmitHook,
} from '@hooks';
import { useGetStyles } from './styles';

const ActivityDetails = () => {
  const { t } = useTranslation(['activities', 'common']);
  const { communityPool } = useMarketHook();
  const { isDesktop } = useGetScreenSizeHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
  const { classes } = useGetStyles();
  return (
    <Layout
      className={classes.layout}
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
        <div className={classnames('activity-details-content')}>
          <Details
            desktop={isDesktop}
            labels={{
              hash: 'hash',
              height: 'height',
              fee: 'fee',
              gas: 'Gas (used/ wanted)',
              status: 'Status',
              memo: 'Memo',
            }}
            data={{
              time: '1 hour',
              success: true,
              content: <div className="details__content">custom content</div>,
              hash: '12344566',
              height: <div>height</div>,
              fee: '123 uatm',
              gas: '1,234 / 20, 999',
              memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
            }}
          />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default ActivityDetails;
