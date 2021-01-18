import React from 'react';
import { useTranslation } from 'i18n';
import numeral from 'numeral';
import { AddressDisplay } from '@components';
import { MsgDeposit } from '@models';
import { chainConfig } from '@src/chain_config';
import { formatDenom } from '@utils';
import { ProposalDisplay } from '..';

const DepositProposal = () => {
  const { t } = useTranslation(['activities']);

  const message:MsgDeposit = {
    category: 'governance',
    type: '/cosmos.gov.v1beta1.MsgDeposit',
    depositor: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    proposalId: 1,
    amount: [
      {
        denom: 'udaric',
        amount: '100',
      },
    ],
  };

  const parsedAmount = message?.amount?.map((x) => {
    return `${formatDenom(chainConfig.display, numeral(x.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.depositor} />
      </span>
      {' '}
      {t('deposited')}
      {' '}
      <span className="amount">
        {parsedAmount}
      </span>
      {' '}
      {t('to')}
      {' '}
      <span className="link">
        <ProposalDisplay proposalId={message.proposalId} />
      </span>
    </p>
  );
};

export default DepositProposal;
