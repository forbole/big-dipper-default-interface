import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgSubmitProposal } from '@models';
import { ProposalDisplay } from '..';
import { translationFormatter } from '../../utils';

const SubmitProposal = () => {
  const { t } = useTranslation(['activities']);

  const message:MsgSubmitProposal = MsgSubmitProposal.fromJson({
    '@type': '/cosmos.gov.v1beta1.MsgSubmitProposal',
    content: {
      '@type': '/cosmos.gov.v1beta1.TextProposal',
      title: 'test software upgrade proposal',
      description: 'something about the proposal here',
    },
    initial_deposit: [
      {
        denom: 'udaric',
        amount: '20000000',
      },
    ],
    proposer: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
  });

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.proposer} />
      </span>
      {translationFormatter(t('txSubmitProposalOne'))}
      <span className="link">
        <ProposalDisplay proposalId={null} />
      </span>
    </p>
  );
};

export default SubmitProposal;
