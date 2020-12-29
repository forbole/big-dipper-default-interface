import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import InfiniteScroll from 'react-infinite-scroller';
import {
  ProposalDepositDesktop,
  ProposalDepositMobile,
} from 'big-dipper-default-ui';
import { InfiniteLoader } from '@components';
import { useGetStyles } from './styles';
import { useDepositHook } from './hooks';

const Deposit = () => {
  const {
    state,
    handleLoadMore,
  } = useDepositHook();

  const {
    hasMore,
    data,
  } = state;
  const { t } = useTranslation(['proposals', 'common']);
  const { classes } = useGetStyles();
  return (
    <div className={classes.root}>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        hasMore={hasMore}
        loader={<InfiniteLoader key={0} />}
      >
        <ProposalDepositDesktop
          className={classnames(classes.root)}
          data={data}
          title={t('proposalDepositTitle')}
          labels={{
            depositor: t('depositor'),
            amount: t('amount'),
            time: t('time'),
          }}
        />
        <ProposalDepositMobile
          className={classnames(classes.root)}
          data={data}
          title={t('proposalDepositTitle')}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Deposit;
