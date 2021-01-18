import React from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import { formatDenom } from '@utils';
import { AddressDisplay } from '@components';
import { MsgMultiSend } from '@models';
import { chainConfig } from '@src/chain_config';
import { useGetStyles } from './styles';

const Multisend = () => {
  const { t } = useTranslation(['activities']);
  const { classes } = useGetStyles();

  const message: MsgMultiSend = {
    category: 'bank',
    type: '/cosmos.bank.v1beta1.MsgMultiSend',
    inputs: [
      {
        address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
        coins: [
          {
            denom: 'udaric',
            amount: '1000',
          },
        ],
      },
    ],
    outputs: [
      {
        address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
        coins: [
          {
            denom: 'udaric',
            amount: '1000',
          },
          {
            denom: 'udaric',
            amount: '12400',
          },
          {
            denom: 'udaric',
            amount: '212245400',
          },
        ],
      },
      {
        address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
        coins: [
          {
            denom: 'udaric',
            amount: '12400',
          },
        ],
      },
    ],
  };

  const sender = R.pathOr({
  }, ['inputs', 0], message);
  const senderAmount = sender?.amount?.map((x) => {
    return `${formatDenom(chainConfig.display, numeral(x.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  const receivers = message?.outputs?.map((output) => {
    const parsedAmount = output?.coins?.map((x) => {
      return `${formatDenom(chainConfig.display, numeral(x.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;
    }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

    return {
      address: output.address,
      parsedAmount,
    };
  });

  return (
    <>
      <p>
        <span className="address">
          <AddressDisplay address={sender?.address} />
        </span>
        {' '}
        {t('sent')}
        {' '}
        <span className="amount">
          {senderAmount}
        </span>
        {' '}
        {t('totheFollowingRecipients')}
        :
      </p>
      <div className={classes.multisend}>
        {
        receivers?.map((x, i) => {
          return (
            <p key={`${x.address}-${i}`}>
              <span className="address">
                <AddressDisplay address={x.address} />
              </span>
              {' '}
              {t('received')}
              {' '}
              <span className="amount">
                {x.parsedAmount}
              </span>
            </p>
          );
        })
      }
      </div>
    </>
  );
};

export default Multisend;
