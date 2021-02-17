export const getFilterLabels = () => {
  return ([
    {
      key: 'none',
      display: 'none',
      types: [], // in all validators do no pass this in
    },
    {
      key: 'bank',
      display: 'bank',
      types: [
        'cosmos.bank.v1beta1.MsgSend',
        'cosmos.bank.v1beta1.MsgMultiSend',
      ],
    },
    {
      key: 'crisis',
      display: 'crisis',
      types: [
        'cosmos.bank.v1beta1.MsgSend',
        'cosmos.bank.v1beta1.MsgMultiSend',
      ],
    },
    {
      key: 'distribution',
      display: 'distribution',
      types: [
        'cosmos.distribution.v1beta1.MsgFundCommunityPool',
        'cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
        'cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
      ],
    },
    {
      key: 'governance',
      display: 'governance',
      types: [
        'cosmos.gov.v1beta1.MsgSubmitProposal',
        'cosmos.gov.v1beta1.MsgDeposit',
        'cosmos.gov.v1beta1.MsgVote',
      ],
    },
    {
      key: 'slashing',
      display: 'slashing',
      types: [
        'cosmos.slashing.v1beta1.MsgUnjail',
      ],
    },
    {
      key: 'staking',
      display: 'staking',
      types: [
        'cosmos.staking.v1beta1.MsgCreateValidator',
        'cosmos.staking.v1beta1.MsgDelegate',
        'cosmos.staking.v1beta1.MsgEditValidator',
        'cosmos.staking.v1beta1.MsgBeginRedelegate',
        'cosmos.staking.v1beta1.MsgUndelegate',
      ],
    },
  ]);
};
