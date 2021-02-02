import React from 'react';
import { useTranslation } from 'i18n';
import {
  AvatarDisplay,
  InfoPopover,
} from '@forbole/big-dipper-default-ui';
import {
  Last7Days,
  TrendChart,
  Dialog,
} from './components';
import { useUserInfoHook } from './hooks';
import { userInfoParser } from '@src/graphql/parsers/queries';

// const { t } = useTranslation(['accounts', 'activities']);
// const { userInfo } = useUserInfoHook();

export const toCurrency = (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const TrendChartdata = {
  numberDisplay: '2.86% (24h)',
  data: [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ],
};

const ProposerData = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

const InfoPop = () => {
  return (
    <InfoPopover
      detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tristique lorem, id commodo lectus. In faucibus sem eu tellus gravida, id blandit ex tincidunt. Nam tincidunt dolor eros, eget porttitor metus co"
    />
  );
};

export const delegate = {
  validator: {
    className: 'validator',
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  amount: {
    className: 'amount',
    rawValue: 4602020,
    display: '4,602,020 ATOM',
  },
  ratio: {
    className: 'ratio',
    rawValue: 77,
    display: '0.77%',
  },
  reward: {
    className: 'reward',
    rawValue: 1122.969256,
    display: '1,122.969256 ATOM',
  },
  commission: {
    className: 'commission',
    rawValue: '5',
    display: '5.00%',
  },
  VPRatios: {
    className: 'VPRatios',
    rawValue: 0.18,
    display: '0.18%',
  },
  last7Days: {
    className: 'last7Days',
    rawValue: 1,
    display: <Last7Days data={TrendChartdata.data} />,
  },
};

export const redelegate = {
  validator: {
    className: 'validator',
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  height: {
    className: 'height',
    rawValue: 1503609,
    display: '1,503,609',
  },
  amount: {
    className: 'redelegatedAmount',
    rawValue: 1602020.799998,
    display: '1,602,020.799998 ATOM',
  },
  remainAmount: {
    className: 'remainAmount',
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
  },
  expectedDelivery: {
    className: 'expectedDelivery',
    rawValue: '20 Jan 2020, 19:27:20 (In 7 days)',
    display: '20 Jan 2020, 19:27:20 (In 7 days)',
  },
};

export const unbonded = {
  validator: {
    className: 'validator',
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  height: {
    className: 'height',
    rawValue: 2503609,
    display: '2,503,609',
  },
  amount: {
    className: 'amount',
    rawValue: 7202020.799998,
    display: '7,202,020.799998 ATOM',
  },
  remainAmount: {
    className: 'remainAmount',
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
  },
  expectedDelivery: {
    className: 'expectedDelivery',
    rawValue: '20 Jan 2020, 19:27:20 (In 7 days)',
    display: '20 Jan 2020, 19:27:20 (In 7 days)',
  },
};

export const dummyData: any = {
  title: 'Account Details',
  addressContent: {
    img: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    alt: '',
    address: {
      title: 'Address',
      display: 'cosmos14kn0k…swhp',
      dialog: (
        <Dialog
          address={{
            display: 'cosmos14kn0k…swhp',
            rawValue: 'cosmos14kn0k…swhp',
          }}
        />
      ),
      rawValue: 'cosmos14kn0k…swhp',
    },
    rewardAddress: {
      title: (
        <div className="rewardAddress">
          Reward Address
          <InfoPop />
        </div>
      ),
      display: 'cosmos14kn0k…swhp',
      rawValue: '123',
    },
  },
  // chart: {
  //   total: {
  //     title: 'Total ATOM',
  //     subTitle: '$3.22/ATOM',
  //   },
  //   totalDollar: {
  //     title: '6,574,315.38',
  //     subTitle: '$21,169,295.52',
  //   },
  //   colors: ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'],
    // data: [
    //   {
    //     title: 'Available',
    //     value: 0,
    //     display: '111,189.15 ATOM',
    //   },
    //   {
    //     title: 'Delegate',
    //     value: 123,
    //     display: '6,458,003.25 ATOM',
    //   },
    //   {
    //     title: 'Unbonding',
    //     value: 0,
    //     display: '156.00 ATOM',
    //   },
    //   {
    //     title: 'Reward',
    //     value: 0,
    //     display: '5,122.96 ATOM',
    //   },
    //   {
    //     title: 'Commission',
    //     value: 0,
    //     display: '1,324.91 ATOM',
    //   },
    // ],
    // customComponent: <TrendChart
    //   {...TrendChartdata}
    // />,
  // },
  tabProps: {
    delegations: 'Delegations',
    redelegations: 'redelegations',
    unbondings: 'Unbondings',
  },
  tableDefaultProps: {
    delegatdColumns: [
      {
        label: 'validator',
        display: 'Validator',
        sort: true,
      },
      {
        label: 'amount',
        display: 'Delegated Amount',
        align: 'right',
        sort: true,
      },
      {
        label: 'ratio',
        display: 'Amt. Ratio',
        align: 'right',
        sort: true,
      },
      {
        label: 'reward',
        display: 'Reward',
        align: 'right',
        sort: true,
      },
      {
        label: 'commission',
        display: 'Commission',
        align: 'right',
        sort: true,
      },
      {
        label: 'VPRatios',
        display: 'VR Ratio',
        align: 'right',
        sort: true,
      },
      {
        label: 'last7Days',
        display: 'Last 7 days',
        align: 'right',
        sort: true,
      },
    ],
    redelegatedColumns: [
      {
        label: 'validator',
        display: 'Validator',
        sort: true,
      },
      {
        label: 'height',
        display: 'Height',
        sort: true,
      },
      {
        label: 'amount',
        display: 'redelegated Amount',
        align: 'right',
        sort: true,
      },
      {
        label: 'remainAmount',
        display: 'Remain Amount',
        align: 'right',
        sort: true,
      },
      {
        label: 'expectedDelivery',
        display: 'Expected Delivery',
        align: 'right',
        sort: true,
      },
    ],
    unbondingColumns: [
      {
        label: 'validator',
        display: 'Validator',
        sort: true,
      },
      {
        label: 'height',
        display: 'Height',
        sort: true,
      },
      {
        label: 'amount',
        display: 'Unbonded Amount',
        align: 'right',
        sort: true,
      },
      {
        label: 'remainAmount',
        display: 'Remain Amount',
        align: 'right',
        sort: true,
      },
      {
        label: 'expectedDelivery',
        display: 'Expected Delivery',
        align: 'right',
        sort: true,
      },
    ],
    delegatedData: [
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
    ],
    redelegatedData: [
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
    ],
    unbondingData: [
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,

    ],
  },
};
