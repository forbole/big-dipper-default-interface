import React from 'react';
import { useTranslation } from 'i18n';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import {
  ProposalInfoDesktop,
  ProposalInfoMobile,
} from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import { dummyData } from './utils';

const Info = () => {
  const { t } = useTranslation(['proposals', 'common']);
  const { classes } = useGetStyles();

  return (
    <div className={classes.root}>
      <ProposalInfoDesktop
        className={classnames(classes.root)}
        data={dummyData}
        label={{
          proposer: t('proposerDisplay'),
          submittedTime: t('submittedTime'),
          votingStartTime: t('votingStartTime'),
          votingEndTime: t('votingEndTime'),
          depositEndTime: t('depositEndTime'),
          type: t('type'),
          description: t('description'),
        }}
      />
      <ProposalInfoMobile
        className={classnames(classes.root)}
        data={dummyData}
        label={{
          title: t('proposalTitle'),
          id: t('title'),
          status: t('status'),
          deposit: t('deposit'),
          proposer: t('proposerDisplay'),
          submittedTime: t('submittedTime'),
          votingStartTime: t('votingStartTime'),
          votingEndTime: t('votingEndTime'),
          depositEndTime: t('depositEndTime'),
          type: t('type'),
          description: t('description'),
        }}
      />
    </div>
  );
};

export default Info;
