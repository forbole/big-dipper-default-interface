import React from 'react';
import numeral from 'numeral';
import moment from 'moment';
import Link from 'next/link';
import { ActivityDetail } from '@models';
import { formatDenom } from '@utils';
import { chainConfig } from '@src/chain_config';

export const formatActivityDetailsData = (data: ActivityDetail) => {
  return {
    time: moment(data.timestamp).format('DD MMM YYYY, HH:mm'),
    success: data.success,
    hash: data.hash,
    height: (
      <Link href={`/blocks/${data.height}`}>
        <a>
          {numeral(data.height).format('0,0')}
        </a>
      </Link>
    ),
    fee: `${formatDenom(chainConfig.display, data?.fee?.gas, '0,0.[000000]').format} ${chainConfig.display.toUpperCase()}`,
    gas: `${numeral(data.gasUsed).format('0,0')} / ${numeral(data.gasWanted).format('0,0')}`,
    memo: data.memo,
    messages: data.messages,
  };
};
