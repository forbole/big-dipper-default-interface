import React from 'react';
import Skeleton from 'react-loading-skeleton';
import numeral from 'numeral';
import moment from 'moment';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import { BlockDetails } from 'big-dipper-default-ui';
import { AvatarDisplay } from '@components';
import { useGetScreenSizeHook } from '@hooks';
import { useGetStyles } from './styles';
import { useBlockDetailsTableHook } from './hooks';

const BlockDetailsTable = () => {
  const { t } = useTranslation(['blocks', 'activities']);
  const {
    block,
    precommits,
    votingPowerSum,
    loading,
  } = useBlockDetailsTableHook(t);
  // ========================
  // styles
  // ========================
  const { isDesktop } = useGetScreenSizeHook();
  const { classes } = useGetStyles();

  if (loading) {
    return (
      <div>
        <Skeleton width="60%" height={30} />
        <br />
        <Skeleton count={6} height={30} />
      </div>
    );
  }

  return (
    <BlockDetails
      className={classnames(classes.root)}
      title={`${t('subTitle')} ${numeral(block.height).format('0,0')}`}
      hash={{
        display: t('hash'),
        value: block.hash,
      }}
      time={{
        display: t('timeDisplay'),
        value: moment(block.timestamp).format('Do MMM YYYY, HH:mm:ss UTC'),
      }}
      noTransactions={{
        display: t('noTransactions'),
        value: numeral(block.tx).format('0,0'),
      }}
      proposer={{
        display: t('proposer'),
        value: <AvatarDisplay
          identity={block.validator.identity}
          display={block.validator.moniker}
          address={block.validator.validatorAddress}
        />,
      }}
      signedVotingPower={{
        display: t('signedVotingPower'),
        value: votingPowerSum,
      }}
      signatures={{
        display: 'Signatures',
        value: numeral(precommits.length).format('0,0'),
        labels: {
          validator: 'Validator',
          votingPower: 'Voting Power',
          votingPowerPercentage: 'Voting Power (Percentage)',
          signStatus: 'Sign Status',
        },
        data: precommits,
      }}
      desktop={isDesktop}
    />
  );
};

export default BlockDetailsTable;
