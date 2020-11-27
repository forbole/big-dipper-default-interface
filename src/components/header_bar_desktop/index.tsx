import React from 'react';
import { HeaderBarDesktop as HeaderBar } from 'big-dipper-internal-ui';
import { formatDenom } from '@utils';
import { chainConfig } from '@src/chain_config';
import { HeaderBarDesktopProps } from './types';
import { getBasePool } from './utils';

/**
 * Custom Header component
 */
const HeaderBarDesktopDesktop = (props:HeaderBarDesktopProps) => {
  const {
    title, communityPool,
  } = props;
  const baseCommunityPool = getBasePool(chainConfig.base, communityPool.data);
  const communityPoolValue = formatDenom('daric', baseCommunityPool?.amount ?? 0);
  return (
    <HeaderBar
      title={title}
      market={[
        {
          key: 'Price',
          value: '$0.00',
        },
        {
          key: 'Market Cap',
          value: '-',
        },
        {
          key: 'Inflation',
          value: '0.00%',
        },
        {
          key: 'Community Pool',
          value: `${communityPoolValue.format} ${communityPoolValue.denom}`,
        },
      ]}
    />
  );
};

export default HeaderBarDesktopDesktop;
