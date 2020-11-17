import React from 'react';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { chainConfig } from '@src/chain_config';
import { HeaderBarProps } from './types';
import { useHeaderBarHook } from './hooks';
import {
  formatDenom, getBasePool,
} from './utils';

/**
 * Custom Header component
 */
const HeaderBar = (props:HeaderBarProps) => {
  const { title } = props;
  const { communityPool } = useHeaderBarHook();
  const baseCommunityPool = getBasePool(chainConfig.base, communityPool.data);
  const communityPoolValue = formatDenom('daric', baseCommunityPool.amount);
  console.log(communityPoolValue, 'whats the value');
  return (
    <DesktopHeaderBar
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
          value: '3,400,000 ATOM',
        },
      ]}
    />
  );
};

export default HeaderBar;
