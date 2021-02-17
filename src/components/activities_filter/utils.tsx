export const getFilterLabels = () => {
  return ([
    {
      key: 'none',
      display: 'none',
      types: '{}',
    },
    {
      key: 'bank',
      display: 'bank',
      types: '{cosmos.bank.v1beta1.MsgSend, cosmos.bank.v1beta1.MsgMultiSend}',
    },
    {
      key: 'crisis',
      display: 'crisis',
      types: '{}',
    },
    {
      key: 'distribution',
      display: 'distribution',
      types: '{}',
    },
    {
      key: 'governance',
      display: 'governance',
      types: '{}',
    },
    {
      key: 'slashing',
      display: 'slashing',
      types: '{}',
    },
    {
      key: 'staking',
      display: 'staking',
      types: '{}',
    },
  ]);
};
