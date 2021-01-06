import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { Stabilities } from 'big-dipper-default-ui';
import { chainConfig } from '@src/chain_config';
import {
  formatDenom,
  nFormatter,
} from '@utils';
import { useGetStyles } from './styles';
import { useStabilitiesHook } from './hooks';

export const colors = ['#FF7846', '#FFD800'];

const StabilitiesItem = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation(['home']);
  const { stabilities } = useStabilitiesHook();

  // ================================
  // display conversions
  // ================================
  const communityPoolDisplay = formatDenom(chainConfig.display, stabilities.communityPool);
  const totalSupplyRaw = formatDenom(chainConfig.display, stabilities.totalSupply).raw;
  const totalSupplyDisplay = nFormatter(totalSupplyRaw, 1);
  const unbondedTokens = formatDenom(chainConfig.display, stabilities.unbondedTokens);
  const bondedTokens = formatDenom(chainConfig.display, stabilities.bondedTokens);

  return (
    <Stabilities
      className={classnames(classes.root)}
      title={t('stabilitiesTitle')}
      coin={chainConfig.display}
      price={{
        title: t('priceTitle'),
        display: '$0.00',
      }}
      inflation={{
        title: t('inflationTitle'),
        display: '0.00%',
      }}
      marketCap={{
        title: t('marketCapTitle'),
        display: '$0.00',
      }}
      communityPool={{
        title: t('communityPoolTitle'),
        display: communityPoolDisplay.format,
      }}
      data={{
        total: {
          value: totalSupplyRaw,
          display: totalSupplyDisplay,
        },
        detail: [
          {
            title: t('bonded'),
            value: bondedTokens.raw,
            display: bondedTokens.format,
          },
          {
            title: t('unbonded'),
            value: unbondedTokens.raw,
            display: unbondedTokens.format,
          },
        ],
      }}
      colors={colors}
    />
  );
};

export default StabilitiesItem;
