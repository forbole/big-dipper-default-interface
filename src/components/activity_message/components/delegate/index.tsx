import React from 'react';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import { formatDenom } from '@utils';
import { AddressDisplay } from '@components';
import { MsgDelegate } from '@models';
import { chainConfig } from '@src/chain_config';

const Delegate = () => {
  const { t } = useTranslation(['activities']);

  // fake
  const message: MsgDelegate = {
    category: 'staking',
    type: '/cosmos.staking.v1beta1.MsgDelegate',
    delegatorAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    validatorAddress: 'desmosvaloper1fl7nsznuz4np9tj82m2g6m0w83ztzvflpe8kyk',
    amount: {
      denom: 'udaric',
      amount: 10003400,
    },
  };

  const parsedAmount = `${formatDenom(chainConfig.display, numeral(message.amount.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {' '}
      {t('txDelegateOne')}
      {' '}
      <span className="amount">
        {parsedAmount}
      </span>
      {' '}
      {t('txDelegateTwo')}
      {' '}
      <span className="address">
        <AddressDisplay address={message.validatorAddress} />
      </span>
    </p>
  );
};

export default Delegate;
