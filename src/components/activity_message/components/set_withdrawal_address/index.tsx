import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgSetWithdrawAddress } from '@models';
import { translationFormatter } from '../../utils';

const SetWithdrawalAddress = () => {
  const { t } = useTranslation(['activities']);
  const message:MsgSetWithdrawAddress = {
    category: 'slashing',
    type: '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
    delegatorAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    withdrawalAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
  };

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {translationFormatter(t('txsetRewardAddressOne'))}
      <span className="address">
        <AddressDisplay address={message.withdrawalAddress} />
      </span>
    </p>
  );
};

export default SetWithdrawalAddress;
