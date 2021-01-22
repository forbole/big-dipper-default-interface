import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { ActivityDetails as Details } from 'big-dipper-default-ui';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
  ActivityMessage,
} from '@components';
import {
  useMarketHook,
  useGetScreenSizeHook,
  useSearchbarSubmitHook,
} from '@hooks';
import { useActivityDetailsHook } from './hooks';
import { useGetStyles } from './styles';

const ActivityDetails = () => {
  const { t } = useTranslation(['activities', 'common']);
  const { communityPool } = useMarketHook();
  const { isDesktop } = useGetScreenSizeHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
  const { classes } = useGetStyles();
  const { detail } = useActivityDetailsHook();

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
              hash: t('hash'),
              height: t('height'),
              time: t('time'),
              fee: t('fee'),
              gas: t('gas'),
              status: t('status'),
              memo: t('memo'),
            }}
            data={{
              time: detail.time,
              success: detail.success,
              hash: detail.hash,
              height: detail.height,
              fee: detail.fee,
              gas: detail.gas,
              memo: detail.memo,
            }}
          />
        </div>
        <div className={classnames('messages__container')}>
          {
            detail.messages.map((message, i) => {
              return (
                <ActivityMessage key={`${message.type}-${i}`} message={message} />
              );
            })
          }
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default ActivityDetails;
