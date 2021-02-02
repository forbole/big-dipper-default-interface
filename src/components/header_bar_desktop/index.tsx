import React from 'react';
import { HeaderBarDesktop as HeaderBar } from '@forbole/big-dipper-internal-ui';
import { useTranslation } from 'i18n';
import {
  formatDenom, getBaseCommunityPool,
} from '@utils';
import { chainConfig } from '@src/chain_config';
import { HeaderBarDesktopProps } from './types';

/**
 * Custom Header component
 */
const HeaderBarDesktop = (props:HeaderBarDesktopProps) => {
  const { t } = useTranslation('common');
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
          key: t('price'),
          value: '$0.00',
        },
        {
          key: t('marketCap'),
          value: '-',
        },
        {
          key: t('inflation'),
          value: '0.00%',
        },
        {
          key: t('communityPool'),
          value: `${communityPoolValue.format} ${communityPoolValue.denom}`,
        },
      ]}
    />
  );
};

export default HeaderBarDesktop;
