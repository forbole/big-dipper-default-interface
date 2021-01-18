import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgEditValidator } from '@models';

const EditValidator = () => {
  const { t } = useTranslation(['activities']);

  const message: MsgEditValidator = {
    category: 'staking',
    type: '/cosmos.staking.v1beta1.MsgEditValidator',
    description: {
      moniker: 'Forbole',
      identity: '',
      website: '',
      securityContact: '',
      details: '',
    },
    minSelfDelegation: 1,
    validatorAddress: 'desmosvaloper1fl7nsznuz4np9tj82m2g6m0w83ztzvflpe8kyk',
    commissionRate: null,
  };

  return (
    <p>
      <span className="address">
        <AddressDisplay
          address={message.validatorAddress}
          display={message?.description?.moniker}
        />
      </span>
      {' '}
      {t('updated')}
    </p>
  );
};

export default EditValidator;
