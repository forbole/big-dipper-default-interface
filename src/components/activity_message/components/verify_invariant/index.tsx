import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgVerifyInvariant } from '@models';
import { translationFormatter } from '../../utils';

const VerifyInvariant = () => {
  const { t } = useTranslation(['activities']);

  const message:MsgVerifyInvariant = {
    category: 'crisis',
    type: '/cosmos.crisis.v1beta1.MsgVerifyInvariant',
    sender: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    invariantModuleName: 'distribution',
    invariantRoute: 'module-account',
  };
  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.sender} />
      </span>
      {translationFormatter(t('txVerifyInvariantOne'), {
        after: false,
      })}
    </p>
  );
};

export default VerifyInvariant;
