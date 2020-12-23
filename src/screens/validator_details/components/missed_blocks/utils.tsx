import { AvatarDisplay } from 'big-dipper-default-ui';

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

export const dummyData = [
  {
    proposer: <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: {
      raw: 86,
      display: '86',
    },
  },
];
