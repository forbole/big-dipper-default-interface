import {
  Proposer, Height,
} from './components';

/**
 * Helper function to get mobile labels
 * @param t i18n translator
 */
export const getLabelsMobile = (t:any) => ({
  tx: t('txMobile'),
});

/**
 * Helper function to get deskop labels
 * @param t i18n translator
 */
export const getLabelsDesktop = (t:any) => ({
  proposer: t('proposer'),
  height: t('height'),
  time: t('time'),
  hash: t('hash'),
  tx: t('txDesktop'),
});

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
