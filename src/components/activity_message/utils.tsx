import {
  Delegate,
  Unknown,
  Redelegate,
  Undelegate,
  CreateValidator,
  EditValidator,
  Send,
  Multisend,
  VerifyInvariant,
  Unjail,
  Fund,
  SetWithdrawalAddress,
  WithdrawReward,
  DepositProposal,
  Vote,
  SubmitProposal,
} from './components';

export const getMessageByType = (type:string) => {
  // ========================
  // staking
  // ========================
  if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
    return {
      content: Delegate,
      tagType: 'staking',
      tagDisplay: 'txDelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
    return {
      content: Redelegate,
      tagType: 'redelegate',
      tagDisplay: 'txRedelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
    return {
      content: Undelegate,
      tagType: 'undelegate',
      tagDisplay: 'txUndelegateLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
    return {
      content: CreateValidator,
      tagType: 'staking',
      tagDisplay: 'txCreateValidatorLabel',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
    return {
      content: EditValidator,
      tagType: 'staking',
      tagDisplay: 'txEditValidatorLabel',
    };
  }

  // ========================
  // bank
  // ========================

  if (type === '/cosmos.bank.v1beta1.MsgSend') {
    return {
      content: Send,
      tagType: 'bank',
      tagDisplay: 'txSendLabel',
    };
  }

  if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
    return {
      content: Multisend,
      tagType: 'bank',
      tagDisplay: 'txMultisendLabel',
    };
  }

  // ========================
  // crisis
  // ========================

  if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
    return {
      content: VerifyInvariant,
      tagType: 'crisis',
      tagDisplay: 'txVerifyInvariantLabel',
    };
  }

  // ========================
  // slashing
  // ========================

  if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
    return {
      content: Unjail,
      tagType: 'slashing',
      tagDisplay: 'txUnjailLabel',
    };
  }

  // ========================
  // distribution
  // ========================
  if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
    return {
      content: Fund,
      tagType: 'distribution',
      tagDisplay: 'txFundLabel',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
    return {
      content: SetWithdrawalAddress,
      tagType: 'distribution',
      tagDisplay: 'txsetRewardAddressLabel',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
    return {
      content: WithdrawReward,
      tagType: 'distribution',
      tagDisplay: 'txWithdrawRewardLabel',
    };
  }

  // ========================
  // governance
  // ========================

  if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
    return {
      content: DepositProposal,
      tagType: 'governance',
      tagDisplay: 'txDepositLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgVote') {
    return {
      content: Vote,
      tagType: 'governance',
      tagDisplay: 'txVoteLabel',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
    return {
      content: SubmitProposal,
      tagType: 'governance',
      tagDisplay: 'txSubmitProposalLabel',
    };
  }

  let tagDisplay = 'txUnknownLabel';
  if (type) {
    const tagSplit = type?.split('.');
    tagDisplay = tagSplit[tagSplit.length - 1];
  }

  return {
    content: Unknown,
    tagType: 'unknown',
    tagDisplay,
  };
};

/**
 * Helper function to deal with localisation word changes
 * @param translation
 */
export const translationFormatter = (translation: string, options?: {
  before?: boolean;
  after?: boolean;
}) => {
  const {
    before = true,
    after = true,
  } = options ?? {
  };

  if (translation) {
    return `${before ? ' ' : ''}${translation}${after ? ' ' : ''}`;
  }

  return `${!before || !after ? '' : ' '}`;
};
