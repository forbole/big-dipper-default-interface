import React from 'react';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { formatDenom } from '@utils';
import { chainConfig } from '@src/chain_config';
import { HeaderBarProps } from './types';
import { useHeaderBarHook } from './hooks';
import { getBasePool } from './utils';

/**
 * Custom Header component
 */
const HeaderBar = (props:HeaderBarProps) => {
  const { title } = props;
  const { communityPool } = useHeaderBarHook();
  const baseCommunityPool = getBasePool(chainConfig.base, communityPool.data);
  const communityPoolValue = formatDenom('daric', baseCommunityPool?.amount ?? 0);
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
          value: `${communityPoolValue.format} ${communityPoolValue.denom}`,
        },
      ]}
    />
  );
};

export default HeaderBar;
