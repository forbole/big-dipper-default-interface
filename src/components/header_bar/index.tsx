import React from 'react';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { useTranslation } from 'i18n';

const HeaderBar = () => {
  const { t } = useTranslation('common');
  return (
    <DesktopHeaderBar
      title={t('chain')}
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
