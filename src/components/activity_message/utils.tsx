import {
  Delegate,
  Unknown,
} from './components';

export const getMessageByType = (type:string) => {
  if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
    return {
      content: Delegate,
      tagType: 'staking',
      tagDisplay: 'delegate',
    };
  }

  const tagDisplay = type.split('.');
  return {
    content: Unknown,
    tagType: '',
    tagDisplay: tagDisplay[tagDisplay.length - 1],
  };
};
