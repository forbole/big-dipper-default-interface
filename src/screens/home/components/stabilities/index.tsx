import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { Stabilities } from 'big-dipper-default-ui';
import { useGetStyles } from './styles';

export const colors = ['#FF7846', '#FFD800'];

const StabilitiesItem = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation(['home']);
  return (
    <Stabilities
      className={classnames(classes.root)}
      title={t('stabilitiesTitle')}
      coin={t('coin')}
      price={{
        title: t('priceTitle'),
        display: '$2.756',
      }}
      inflation={{
        title: t('inflationTitle'),
        display: '7.01%',
      }}
      marketCap={{
        title: t('marketCapTitle'),
        display: '$515,551',
      }}
      communityPool={{
        title: t('communityPoolTitle'),
        display: '370,000',
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
