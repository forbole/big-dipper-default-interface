import React from 'react';
import numeral from 'numeral';
import { ValidatorList } from '@models';
import {
  Avatar, AvatarDisplay,
} from '@components';
import { chainConfig } from '@src/chain_config';
import { formatDenom } from '@utils';

export const parseValidators = (data: {
  validators: ValidatorList[];
  bonded: number;
  signedBlockWindow: number;
}) => {
  const active = {
    mobile: [],
    desktop: [],
  };
  const inactive = {
    mobile: [],
    desktop: [],
  };

  const activeStatus = [2, 3];
  const inactiveStatus = [0, 1];

  data.validators.forEach((x) => {
    // % of self within your own voting power
    const self = x.selfDelegations / x.votingPower;
    // % of voting power over bonded tokens
    const votingPower = x.votingPower / data.bonded;
    // health display
    const condition = (x.missedBlockCounter / data.signedBlockWindow) * 100;
    let conditionClass = '';
    if (condition > 90) {
      conditionClass = 'green';
    } else if (condition > 70 && condition < 90) {
      conditionClass = 'yellow';
    } else {
      conditionClass = 'red';
    }
    // ==============================
    // active
    // ==============================
    if (activeStatus.includes(x.status.status)) {
      const base = {
        operatorAddress: x.validatorAddress,
        self: {
          rawValue: self,
          display: numeral(self).format('0%'),
        },
        status: {
          rawValue: x.status.status,
          className: x.status.jailed ? 'jailed' : 'active',
          display: x.status.jailed ? 'jailed' : 'active',
        },
        commission: {
          rawValue: x.commission,
          display: numeral(x.commission).format('0%'),
        },
        votingPower: {
          rawValue: x.votingPower,
          display: `${formatDenom(chainConfig.display, numeral(x.votingPower).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`,
          percentDisplay: numeral(votingPower).format('0%'),
        },
      };

      // mobile conversion
      active.mobile.push({
        ...base,
        moniker: {
          rawValue: x.moniker,
          avatar: <Avatar address={x.validatorAddress} />,
          display: x.moniker,
        },
      });

      // desktop conversion
      active.desktop.push({
        ...base,
        moniker: {
          rawValue: x.moniker,
          display: (
            <AvatarDisplay
              address={x.validatorAddress}
              display={x.moniker}
            />
          ),
        },
        condition: {
          rawValue: condition,
          className: conditionClass,
        },
      });
    }
  });

  return {
    active,
    inactive,
  };
};

// export const dummyActiveMobileData = Array(10).fill({
//   moniker: {
//     rawValue: 'Forbole',
//     avatar: <div>hello</div>,
//     display: 'Forbole',
//   },
//   operatorAddress: '3s12',
//   commission: {
//     rawValue: 90,
//     display: '90%',
//   },
//   self: {
//     rawValue: 11,
//     display: '11%',
//   },
//   votingPower: {
//     rawValue: 10,
//     display: '10',
//     percentDisplay: '45%',
//   },
//   status: {
//     rawValue: 'active',
//     className: 'active',
//     display: 'active',
//   },
// });

// export const dummyActiveDesktopData = Array(10).fill({
//   operatorAddress: 'forbole12345',
//   moniker: {
//     rawValue: 'forbole',
//     display: <div>forbole</div>,
//   },
//   self: {
//     rawValue: 100,
//     display: '100%',
//   },
//   status: {
//     className: 'jailed',
//     rawValue: 'jailed',
//     display: 'jailed',
//   },
//   commission: {
//     rawValue: 100,
//     display: '100',
//   },
//   votingPower: {
//     rawValue: 100,
//     display: '100',
//     percentDisplay: '100%',
//   },
//   condition: {
//     rawValue: 'healthy',
//     className: 'healthy',
//   },
// });

export const dummyInactiveMobileData = Array(10).fill({
  moniker: {
    rawValue: 'Forbole',
    avatar: <div>hello</div>,
    display: 'forbole',
  },
  operatorAddress: '31afsdff2',
  self: {
    rawValue: 10,
    display: '10%',
  },
  votingPower: {
    rawValue: 1000,
    display: '110',
    percentDisplay: '106%',
  },
  status: {
    rawValue: 'active',
    className: 'active',
    display: 'active',
  },
});

export const dummyInactiveDesktopData = Array(10).fill({
  moniker: {
    rawValue: 'Forbole',
    display: <div>Forbole</div>,
  },
  operatorAddress: '31afsdff2',
  self: {
    rawValue: 10,
    display: '10%',
  },
  votingPower: {
    rawValue: 1000,
    display: '110',
    percentDisplay: '106%',
  },
  status: {
    rawValue: 'active',
    className: 'active',
    display: 'active',
  },
  condition: {
    rawValue: 'healthy',
    className: 'healthy',
  },
});

export const getLabels = (t:any) => {
  return {
    moniker: t('moniker'),
    votingPower: t('votingPower'),
    self: t('self'),
    commission: t('commission'),
    status: t('status'),
    condition: {
      display: t('condition'),
      description: t('conditionDescription'),
    },
  };
};
