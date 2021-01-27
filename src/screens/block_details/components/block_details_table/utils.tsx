import numeral from 'numeral';
import {
  PreCommit,
  Stabilities,
} from '@models';
import { AvatarDisplay } from '@components';
import { formatDenom } from '@utils';
import { chainConfig } from '@src/chain_config';
import { PreCommitsProps } from './types';

export const formatPreCommitData = (data:PreCommit[], pool: Stabilities, t): PreCommitsProps[] => {
  return data.map((x) => {
    const votingPower = formatDenom(chainConfig.display, x.votingPower, '0,0.00[0000]');
    const votingPercentage = (x.votingPower / pool.bondedTokens) * 100;
    let votingPercentageParsed = numeral(votingPercentage).format('0.00[0000]%');
    // edge case when the voting power is too small to calculate
    if (votingPercentageParsed === 'NaN%') {
      votingPercentageParsed = '0%';
    }

    return ({
      validator: {
        rawValue: x.moniker || x.validatorAddress,
        display: <AvatarDisplay
          display={x.moniker}
          identity={x.identity}
          address={x.validatorAddress}
        />,
      },
      votingPower: {
        rawValue: votingPower.raw,
        display: `${votingPower.format} ${chainConfig.display.toUpperCase()}`,
      },
      votingPowerPercentage: {
        rawValue: votingPercentage,
        display: votingPercentageParsed,
      },
      signStatus: {
        rawValue: 1,
        display: t('up'),
      },
    });
  });
};

export const getVotingPowerSum = (precommits: PreCommit[], pool: Stabilities) => {
  const votingPowerSum = precommits.reduce((a, b) => {
    return a + b.votingPower;
  }, 0);
  return (votingPowerSum / pool.bondedTokens) * 100;
};
