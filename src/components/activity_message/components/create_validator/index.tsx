import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgCreateValidator } from '@models';
import { translationFormatter } from '../../utils';

const CreateValidator = () => {
  const { t } = useTranslation(['activities']);
  const message: MsgCreateValidator = {
    category: 'staking',
    type: '/cosmos.staking.v1beta1.MsgCreateValidator',
    description: {
      moniker: 'Forbole',
      identity: '',
      website: '',
      securityContact: '',
      details: '',
    },
    commission: {
      rate: 0.100000000000000000,
      maxRate: 0.200000000000000000,
      maxChangeRate: 0.010000000000000000,
    },
    minSelfDelegation: 1,
    delegatorAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    validatorAddress: 'desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw',
    pubkey: {
      type: '/cosmos.crypto.ed25519.PubKey',
      key: '1pk2pQfffJGLUqoOKQpHz1qnil0ymzYPEdSMufr1vTw=',
    },
    value: {
      denom: 'udaric',
      amount: 10003400,
    },
  };

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {translationFormatter(t('txCreateValidatorOne'))}
      <span className="address">
        <AddressDisplay
          address={message.validatorAddress}
          display={message?.description?.moniker}
        />
      </span>
    </p>
  );
};

export default CreateValidator;
