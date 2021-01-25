import React from 'react';
import { useTranslation } from 'i18n';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import {
  ProposalDepositDesktop,
  ProposalDepositMobile,
} from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import { depositData } from './utils';

const Deposit = () => {
  const { t } = useTranslation(['proposals', 'common']);
  const { classes } = useGetStyles();

  return (
    <div className={classes.root}>
      <ProposalDepositDesktop
        className={classnames(classes.root)}
        data={depositData}
        title={t('proposalDepositTitle')}
        labels={{
          depositor: t('depositor'),
          amount: t('amount'),
          time: t('time'),
        }}
      />
      <ProposalDepositMobile
        className={classnames(classes.root)}
        data={depositData}
        title={t('proposalDepositTitle')}
      />
    </div>
  );
};

export default Deposit;
