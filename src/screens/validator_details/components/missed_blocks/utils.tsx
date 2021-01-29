import numeral from 'numeral';
import { ValidatorLatestBlock } from '@models';
import { AvatarDisplay } from '@components';

export const getLabels = (t:any) => {
  return ({
    proposer: t('proposer'),
    height: t('height'),
    votingPower: t('votingPower'),
    gas: t('gas'),
    missed: t('missed'),
    voted: t('voted'),
    yes: t('yes'),
    no: t('no'),
    signatures: t('signatures'),
  });
};

export const getAspect = ({
  isDesktop = false,
  isTablet = false,
}) => {
  if (isTablet) {
    return 1;
  }
  if (isDesktop) {
    return 0.5;
  }
  return 0.5;
};

export const formatBlockInfo = (data: ValidatorLatestBlock[]) => {
  return data.map((x) => {
    return {
      proposer: <AvatarDisplay address={x.proposerAddress} />,
      height: numeral(x.height).format('0,0'),
      votingPower: numeral(x.votingPower).format('0.00[00]%'),
      gas: `${numeral(x.gasUsed).format('0,0.00[00]')} / ${numeral(x.gasWanted).format('0,0.00[00]')}`,
      voted: x.voted,
      signatures: {
        raw: x.signatures,
        display: numeral(x.signatures).format('0,0'),
      },
    };
  });
};
