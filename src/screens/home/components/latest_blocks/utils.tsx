import moment from 'moment';
import { LatestBlock } from '@models';
import { convertNumber } from '@utils';
import {
  AvatarDisplay,
  BlockHeight,
} from '@components';

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
        <AvatarDisplay
          display={x.validator.moniker}
          address={x.validator.validatorAddress}
          identity={x.validator.identity}
        />),
      height: {
        value: x.height,
        display: (
          <BlockHeight
            display={convertNumber(x.height).display}
            raw={x.height}
          />),
      },
      time: moment(x.timestamp).format('DD MMM YYYY, HH:mm:ss'),
      hash: x.hash,
      tx: convertNumber(x.tx).display,
    });
  });
};
