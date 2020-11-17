import React from 'react';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { HeaderBarProps } from './types';

const HeaderBar = (props:HeaderBarProps) => {
  const { title } = props;
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
