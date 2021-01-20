import {
  MsgCreateValidator,
  MsgDelegate,
  MsgDeposit,
  MsgEditValidator,
  MsgFundCommunityPool,
  MsgMultiSend,
  MsgRedelegate,
  MsgSend,
  MsgSetWithdrawAddress,
  MsgSubmitProposal,
  MsgUndelegate,
  MsgUnjail,
  MsgVerifyInvariant,
  MsgVote,
  MsgWithdrawDelegatorReward,
  MsgUnknown,
} from '@models';

export interface ActivityMessageProps {
  message: message;
}

type message = MsgCreateValidator
| MsgDelegate
| MsgDeposit
| MsgEditValidator
| MsgFundCommunityPool
| MsgMultiSend
| MsgRedelegate
| MsgSend
| MsgSetWithdrawAddress
| MsgSubmitProposal
| MsgUndelegate
| MsgUnjail
| MsgVerifyInvariant
| MsgVote
| MsgUnknown
| MsgWithdrawDelegatorReward;
