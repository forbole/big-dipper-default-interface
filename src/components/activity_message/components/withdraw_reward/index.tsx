import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgWithdrawDelegatorReward } from '@models';

const WithdrawReward = () => {
  const { t } = useTranslation(['activities']);
  const message:MsgWithdrawDelegatorReward = {
    category: 'slashing',
    type: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    delegatorAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    validatorAddress: 'desmosvaloper1fl7nsznuz4np9tj82m2g6m0w83ztzvflpe8kyk',
  };
  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {' '}
      {t('withdrew')}
      {' '}
      {t('reward')}
      {' '}
      {t('from')}
      {' '}
      <span className="address">
        <AddressDisplay address={message.validatorAddress} />
      </span>
    </p>
  );
};

export default WithdrawReward;
