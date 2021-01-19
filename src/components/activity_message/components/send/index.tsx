import React from 'react';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import { formatDenom } from '@utils';
import { AddressDisplay } from '@components';
import { MsgSend } from '@models';
import { chainConfig } from '@src/chain_config';
import { translationFormatter } from '../../utils';

const Send = () => {
  const { t } = useTranslation(['activities']);

  const message: MsgSend = {
    category: 'bank',
    type: '/cosmos.bank.v1beta1.MsgSend',
    fromAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    toAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    amount: [
      {
        denom: 'udaric',
        amount: 10003400,
      },
    ],
  };

  const parsedAmount = message?.amount?.map((x) => {
    return `${formatDenom(chainConfig.display, numeral(x.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.fromAddress} />
      </span>
      {translationFormatter(t('txSendOne'))}
      <span className="amount">
        {parsedAmount}
      </span>
      {translationFormatter(t('txSendTwo'))}
      <span className="address">
        <AddressDisplay address={message.toAddress} />
      </span>
    </p>
  );
};

export default Send;
