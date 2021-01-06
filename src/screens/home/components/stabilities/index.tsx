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
  console.log(stabilities, 'our data');
  const communityPoolDisplay = formatDenom(chainConfig.display, stabilities.communityPool.amount);
  const totalSupplyDisplay = nFormatter(
    formatDenom(chainConfig.display, stabilities.totalSupply.amount).raw, 1,
  );
  console.log(totalSupplyDisplay, 'totals');
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
          value: 191235.473,
          display: '0.19 m',
        },
        detail:
          [{
            title: t('bonded'), value: 100000, display: '10,000',
          },
          {
            title: t('unbonded'), value: 91235.473, display: '91,235.4',
          },
          ],
      }}
      colors={colors}
    />
  );
};

export default StabilitiesItem;
