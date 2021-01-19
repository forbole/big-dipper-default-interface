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
      tagDisplay: 'verifyInvariant',
    };
  }

  // ========================
  // slashing
  // ========================

  if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
    return {
      content: Unjail,
      tagType: 'slashing',
      tagDisplay: 'unjail',
    };
  }

  // ========================
  // distribution
  // ========================
  if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
    return {
      content: Fund,
      tagType: 'distribution',
      tagDisplay: 'fund',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
    return {
      content: SetWithdrawalAddress,
      tagType: 'distribution',
      tagDisplay: 'setRewardAddress',
    };
  }

  if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
    return {
      content: WithdrawReward,
      tagType: 'distribution',
      tagDisplay: 'withdrawReward',
    };
  }

  // ========================
  // governance
  // ========================

  if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
    return {
      content: DepositProposal,
      tagType: 'governance',
      tagDisplay: 'deposit',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgVote') {
    return {
      content: Vote,
      tagType: 'governance',
      tagDisplay: 'vote',
    };
  }

  if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
    return {
      content: SubmitProposal,
      tagType: 'governance',
      tagDisplay: 'submitProposal',
    };
  }

  const tagDisplay = type.split('.');
  return {
    content: Unknown,
    tagType: '',
    tagDisplay: tagDisplay[tagDisplay.length - 1],
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
