import moment from 'moment';
import { LatestBlock } from '@models';
import { convertNumber } from '@utils';
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

export const formatLatestBlocksData = (data:LatestBlock[]) => {
  return data.map((x) => {
    return ({
      proposer: (
        <Proposer
          display={x.validator.moniker}
          id={x.validator.validatorAddress}
          identity={x.validator.identity}
        />),
      height: {
        value: x.height,
        display: (
          <Height
            display={convertNumber(x.height).display}
            raw={x.height}
          />),
      },
      time: moment(x.timestamp).format('Do MMMM YYYY, HH:mm:ss'),
      hash: x.hash,
      tx: convertNumber(x.tx).display,
    });
  });
};
