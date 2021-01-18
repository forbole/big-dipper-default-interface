import React from 'react';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { formatDenom } from '@utils';
import { MsgRedelegate } from '@models';
import { chainConfig } from '@src/chain_config';

const Redelegate = () => {
  const { t } = useTranslation(['activities']);

  const message: MsgRedelegate = {
    category: 'staking',
    type: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
    delegatorAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    validatorDstAddress: 'desmosvaloper1fl7nsznuz4np9tj82m2g6m0w83ztzvflpe8kyk',
    validatorSrcAddress: 'desmosvaloper1fl7nsznuz4np9tj82m2g6m0w83ztzvflpe8kyk',
    amount: {
      denom: 'udaric',
      amount: 1000,
    },
  };

  const parsedAmount = `${formatDenom(chainConfig.display, numeral(message.amount.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {' '}
      {t('redelegated')}
      {' '}
      <span className="amount">
        {parsedAmount}
      </span>
      {' '}
      {t('from')}
      {' '}
      <span className="address">
        <AddressDisplay address={message.validatorSrcAddress} />
      </span>
      {' '}
      {t('to')}
      {' '}
      <span className="address">
        <AddressDisplay address={message.validatorDstAddress} />
      </span>
    </p>
  );
};

export default Redelegate;
