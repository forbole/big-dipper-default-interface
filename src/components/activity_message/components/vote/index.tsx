import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgVote } from '@models';
import { ProposalDisplay } from '..';
import { translationFormatter } from '../../utils';

const Vote = () => {
  const { t } = useTranslation(['activities']);

  const message:MsgVote = MsgVote.fromJson({
    '@type': '/cosmos.gov.v1beta1.MsgVote',
    proposal_id: '1',
    voter: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    option: 'VOTE_OPTION_NO',
  });

  const vote = t(message.getOptionTranslationKey());
  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.voter} />
      </span>
      {translationFormatter(t('txVoteOne'))}
      <span className="bold">
        {vote}
      </span>
      {translationFormatter(t('txVoteTwo'))}
      <span className="link">
        <ProposalDisplay proposalId={message.proposalId} />
      </span>
    </p>
  );
};

export default Vote;
