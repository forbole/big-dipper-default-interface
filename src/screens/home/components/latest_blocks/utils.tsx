import {
  Proposer, Height,
} from './components';

export const dummyLabelsMobile = {
  tx: 'tx',
};

export const dummyLabelsDesktop = {
  proposer: 'Proposer',
  height: 'Height',
  time: 'Time',
  hash: 'Hash',
  tx: 'tx',
};

// mobile only shows 7
export const dummyLatestBlocksData:any[] = [
  {
    proposer: <Proposer />,
    height: <Height display="200,00" raw={20000} />,
    time: '10 Jan 2021,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
  {
    proposer: <Proposer />,
    height: <Height display="200,00" raw={20000} />,
    time: '10 Jan 2021,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
  {
    proposer: <Proposer />,
    height: <Height display="200,00" raw={20000} />,
    time: '10 Jan 2021,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
  {
    proposer: <Proposer />,
    height: <Height display="200,00" raw={20000} />,
    time: '10 Jan 2021,13:00:22 UTC',
    hash: '89832B67F594asddw32',
    tx: 2,
  },
];
