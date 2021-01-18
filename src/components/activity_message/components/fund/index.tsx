import React from 'react';
import { useTranslation } from 'i18n';
import numeral from 'numeral';
import { AddressDisplay } from '@components';
import { MsgFundCommunityPool } from '@models';
import { formatDenom } from '@utils';
import { chainConfig } from '@src/chain_config';

const Fund = () => {
  const { t } = useTranslation(['activities']);

  const message:MsgFundCommunityPool = {
    category: 'distribution',
    type: '/cosmos.distribution.v1beta1.MsgFundCommunityPool',
    amount: [
      {
        denom: 'udaric',
        amount: '1000',
      },
    ],
    depositor: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
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
      {t('funded')}
      {' '}
      <span className="amount">
        {parsedAmount}
      </span>
      {' '}
      {t('toTheCommunityPool')}
      {' '}
    </p>
  );
};

export default Fund;
