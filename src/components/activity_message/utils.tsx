import {
  Delegate,
  Unknown,
  Redelegate,
  Undelegate,
} from './components';

export const getMessageByType = (type:string) => {
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

  const tagDisplay = type.split('.');
  return {
    content: Unknown,
    tagType: '',
    tagDisplay: tagDisplay[tagDisplay.length - 1],
  };
};
