import React from 'react';
import classnames from 'classnames';
// import { useTranslation } from 'i18n';
import { Stabilities } from 'big-dipper-default-ui';
import { useGetStyles } from './styles';

export const args = {
  title: 'Stabilities',
  coin: 'ATOM',
  price: {
    title: 'Price',
    display: '$2.756',
  },
  inflation: {
    title: 'Inflation',
    display: '7.01%',
  },
  marketCap: {
    title: 'Market Cap',
    display: '$515,551',
  },
  communityPool: {
    title: 'Community Pool',
    display: '370,000',
  },
  data: {
    total: {
      value: 191235.473,
      display: '0.19 m',
    },
    detail:
      [{
        title: 'Bonded', value: 100000, display: '10,000',
      },
      {
        title: 'Unbonded', value: 91235.473, display: '91,235.4',
      },
      ],
  },
  classname: 'classes.root',
  colors: ['#FF7846', '#FFD800'],
};

const StabilitiesItem = () => {
  const { classes } = useGetStyles();
  return (
    // <div className={args.classname}>
    <Stabilities
      classname={classnames(classes.root)}
      {...args}
    />
    // </div>
  );
};

export default StabilitiesItem;
