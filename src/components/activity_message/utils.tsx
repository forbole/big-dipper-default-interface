import {
  Delegate,
  Unknown,
  Redelegate,
  Undelegate,
  CreateValidator,
  EditValidator,
  Send,
  Multisend,
} from './components';

export const getMessageByType = (type:string) => {
  // ========================
  // staking
  // ========================
  if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
    return {
      content: Delegate,
      tagType: 'staking',
      tagDisplay: 'delegate',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
    return {
      content: Redelegate,
      tagType: 'redelegate',
      tagDisplay: 'redelegate',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
    return {
      content: Undelegate,
      tagType: 'undelegate',
      tagDisplay: 'undelegate',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
    return {
      content: CreateValidator,
      tagType: 'staking',
      tagDisplay: 'createValidator',
    };
  }

  if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
    return {
      content: EditValidator,
      tagType: 'staking',
      tagDisplay: 'editValidator',
    };
  }

  // ========================
  // bank
  // ========================

  if (type === '/cosmos.bank.v1beta1.MsgSend') {
    return {
      content: Send,
      tagType: 'bank',
      tagDisplay: 'send',
    };
  }

  if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
    return {
      content: Multisend,
      tagType: 'bank',
      tagDisplay: 'multisend',
    };
  }

  const tagDisplay = type.split('.');
  return {
    content: Unknown,
    tagType: '',
    tagDisplay: tagDisplay[tagDisplay.length - 1],
  };
};
