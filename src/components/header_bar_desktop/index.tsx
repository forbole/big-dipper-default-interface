import React from 'react';
import { HeaderBarDesktop as HeaderBar } from 'big-dipper-internal-ui';
import {
  formatDenom, getBaseCommunityPool,
} from '@utils';
import { chainConfig } from '@src/chain_config';
import { HeaderBarDesktopProps } from './types';

/**
 * Custom Header component
 */
const HeaderBarDesktop = (props:HeaderBarDesktopProps) => {
  const {
    title, communityPool,
  } = props;
  const baseCommunityPool = getBaseCommunityPool(chainConfig.base, communityPool.data);
  const communityPoolValue = formatDenom(chainConfig.display, baseCommunityPool?.amount ?? 0);
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

export default HeaderBarDesktop;
