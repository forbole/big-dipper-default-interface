import { AvatarDisplay } from '@components';
import { Proposer } from '@models';

export const formatProposer = (data: Proposer) => {
  return (
    <AvatarDisplay
      display={data.validator.moniker}
      address={data.validator.consensusAddress}
      identity={data.validator.identity}
    />
  );
};

export const toCurrency = (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const toPercentage = (votingPower: number, bondedTokens: number) => {
  return (votingPower / bondedTokens);
};

export const toPercentageDisplay = (votingPower: number, bondedTokens: number) => {
  const toPercentageNum = (votingPower / bondedTokens);
  return `${Math.round(toPercentageNum * 100000) / 100000} %`;
};
