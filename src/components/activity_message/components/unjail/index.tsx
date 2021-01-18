import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgUnjail } from '@models';

const Unjail = () => {
  const { t } = useTranslation(['activities']);

  const message:MsgUnjail = {
    category: 'slashing',
    type: '/cosmos.slashing.v1beta1.MsgUnjail',
    validatorAddress: 'desmosvaloper1fl7nsznuz4np9tj82m2g6m0w83ztzvflpe8kyk',
  };

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.validatorAddress} />
      </span>
      {' '}
      {t('unjailed')}
    </p>
  );
};

export default Unjail;
