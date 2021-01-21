import React, { useState } from 'react';
import classnames from 'classnames';
import {
  FileCopyOutlined,
  Facebook,
  Twitter,
  Telegram,
  WhatsApp,
  Email,
  ArrowDropDown,
} from '@material-ui/icons';
import {
  AreaChart,
  Area,
} from 'recharts';
import {
  AvatarDisplay,
  InfoPopover,
  InfoDialog,
} from 'big-dipper-default-ui';
import {
  Last7Days,
  TrendChart,
  Dialog,
} from './components';

const ProposerData = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

export interface CopyIconProp {
  address: string,
}

const CopyIcon = (prop: CopyIconProp) => {
  const [copySuccess, setCopySuccess] = useState('');
  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 1500);
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };
  return (
    <div>
      <FileCopyOutlined className={classnames('copy-icon')} onClick={() => copyToClipBoard(prop.address)} />
      {copySuccess}
    </div>
  );
};

const InfoPop = () => {
  return (
    <InfoPopover
      detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tristique lorem, id commodo lectus. In faucibus sem eu tellus gravida, id blandit ex tincidunt. Nam tincidunt dolor eros, eget porttitor metus co"
    />
  );
};

// export interface DialogProp {
//   address: string,
// }
// const Dialog = (prop: DialogProp) => {
//   return (
//     <InfoDialog
//       title="scan for address"
//       buttonDisplay="Copy Address"
//       address={prop.address}
//       socialMedia={(
//         <div>
//           Share to ...
//           <div
//             style={{
//               marginTop: '1rem',
//             }}
//           >
//             <Facebook
//               style={{
//                 height: '2rem',
//                 width: '2rem',
//               }}
//             />
//             <Twitter
//               style={{
//                 height: '2rem',
//                 width: '2rem',
//               }}
//             />
//             <Telegram
//               style={{
//                 height: '2rem',
//                 width: '2rem',
//               }}
//             />
//             <WhatsApp
//               style={{
//                 height: '2rem',
//                 width: '2rem',
//               }}
//             />
//             <Email
//               style={{
//                 height: '2rem',
//                 width: '2rem',
//               }}
//             />
//           </div>
//         </div>
//       )}
//     />
//   );
// };

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
    display: <Last7Days />,
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
    className: 'delegatedAmount',
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
  address: {
    img: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    alt: '',
    address: {
      title: 'Address',
      address: (
        <div className="addressDisplay">
          cosmos14kn0k…swhp
          <CopyIcon address="cosmos14kn0k…swhp" />
          <Dialog
            address="cosmos14kn0k…swhp"
          />
        </div>
      ),
    },
    rewardAddress: {
      title: (
        <div className="rewardAddress">
          Reward Address
          <InfoPop />
        </div>
      ),
      address: (
        <div className="addressDisplay">
          cosmos14kn0k…swhp
          <CopyIcon address="cosmos14kn0k…swhp" />
        </div>
      ),
    },
  },
  chart: {
    total: {
      title: 'Total ATOM',
      subTitle: '$3.22/ATOM',
    },
    totalDollar: {
      title: '6,574,315.38',
      subTitle: '$21,169,295.52',
    },
    colors: ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'],
    data: [
      {
        title: 'Available',
        value: 111189.15,
        display: '111,189.15 ATOM',
      },
      {
        title: 'Delegate',
        value: 458003.25,
        display: '6,458,003.25 ATOM',
      },
      {
        title: 'Unbonding',
        value: 156.00,
        display: '156.00 ATOM',
      },
      {
        title: 'Reward',
        value: 5122.96,
        display: '5,122.96 ATOM',
      },
      {
        title: 'Commission',
        value: 1324.91,
        display: '1,324.91 ATOM',
      },
    ],
    customComponent: <TrendChart />,
  },
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
