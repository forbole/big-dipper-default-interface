import React from 'react';
import numeral from 'numeral';
import { ValidatorList } from '@models';
import {
  Avatar, AvatarDisplay,
} from '@components';
import { chainConfig } from '@src/chain_config';
import { formatDenom } from '@utils';

export const parseValidators = (t:any, data: {
  validators: ValidatorList[];
  bonded: number;
  signedBlockWindow: number;
}, indexes: {
  inactiveIndex: number;
}) => {
  const active = {
    mobile: [],
    desktop: [],
  };
  const inactive = {
    total: 0,
    currentCount: 0,
    mobile: [],
    desktop: [],
  };

  // =============================
  // 0 - unspecified
  // 1 - unbonded
  // 2 - unbonding
  // 3 - bonded
  // =============================

  data.validators
    .filter((x) => x.validatorAddress && x.status.status !== null)
    .sort((a, b) => ((a.moniker.toLowerCase() > b.moniker.toLowerCase()) ? 1 : -1))
    .forEach((x) => {
      // % of self within your own voting power
      const self = formatDenom(chainConfig.display, x.selfDelegations).raw / x.votingPower;
      // % of voting power over bonded tokens
      const votingPower = (x.votingPower / formatDenom(chainConfig.display, data.bonded).raw) * 100;

      let votingPowerPercentage = `${numeral(votingPower).format('0.00')}%`;
      // edge case when the number gets too small
      if (votingPowerPercentage === 'NaN%') votingPowerPercentage = '0.00%';

      // health display
      const condition = (1 - (x.missedBlockCounter / data.signedBlockWindow)) * 100;
      let conditionClass = '';
      if (condition > 90) {
        conditionClass = 'green';
      } else if (condition > 70 && condition < 90) {
        conditionClass = 'yellow';
      } else {
        conditionClass = 'red';
      }

      const defaultBase = {
        operatorAddress: x.validatorAddress,
        self: {
          rawValue: self,
          display: numeral(self).format('0.00%'),
        },
        votingPower: {
          rawValue: x.votingPower,
          display: numeral(x.votingPower).format('0,0'),
          percentDisplay: votingPowerPercentage,
        },
      };

      // ==============================
      // active
      // ==============================
      if (x.status.status === 3 && !x.status.jailed) {
        const activeBase = {
          ...defaultBase,
          commission: {
            rawValue: x.commission,
            display: numeral(x.commission).format('0.00%'),
          },
        };

        // mobile conversion
        active.mobile.push({
          ...activeBase,
          moniker: {
            rawValue: x.moniker,
            avatar: (
              <Avatar
                address={x.validatorAddress}
                diameter={50}
              />
            ),
            display: x.moniker,
          },
        });

        // desktop conversion
        active.desktop.push({
          ...activeBase,
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
      } else if (x.status.status !== null || (x.status.status === 3 && x.status.jailed)) {
        // ==============================
        // inactive
        // ==============================
        const inactiveStatus = {
          0: {
            className: 'inactive',
            display: t('inactive'),
          },
          1: {
            className: 'unbonded',
            display: t('unbonded'),
          },
          2: {
            className: 'unbonding',
            display: t('unbonding'),
          },
          3: {
            className: 'jailed',
            display: t('jailed'),
          },
        };

        const inactiveBase = {
          ...defaultBase,
          status: {
            rawValue: x.status.status,
            className: inactiveStatus[x.status.status].className ?? 'inactive',
            display: inactiveStatus[x.status.status].display ?? t('inactive'),
          },
        };

        // mobile
        inactive.mobile.push({
          ...inactiveBase,
          moniker: {
            rawValue: x.moniker,
            avatar: (
              <Avatar
                address={x.validatorAddress}
                diameter={50}
              />
            ),
            display: x.moniker,
          },
        });

        // desktop
        inactive.desktop.push({
          ...inactiveBase,
          moniker: {
            rawValue: x.moniker,
            display: (
              <AvatarDisplay
                address={x.validatorAddress}
                display={x.moniker}
              />
            ),
          },
        });
      }
    });
  // =====================================
  // handle pagination for inactive
  // =====================================
  inactive.total = inactive.desktop.length;
  inactive.desktop = inactive.desktop.slice(0, 10 * indexes.inactiveIndex + 1);
  inactive.currentCount = inactive.desktop.length;

  return {
    active,
    inactive,
  };
};

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
