import {
  MsgWithdrawDelegatorReward,
  MsgVote,
  MsgVerifyInvariant,
  MsgUnjail,
  MsgUndelegate,
  MsgSubmitProposal,
  MsgSetWithdrawAddress,
  MsgSend,
  MsgRedelegate,
  MsgMultiSend,
  MsgFundCommunityPool,
  MsgEditValidator,
  MsgDeposit,
  MsgDelegate,
  MsgCreateValidator,
  MsgUnknown,
} from '@models';

class LatestActivity {
  public height: number;
  public success: boolean;
  public hash: string;
  public timestamp: string;
  public messages: any[];

  constructor(payload: any) {
    this.height = payload.height;
    this.hash = payload.hash;
    this.timestamp = payload.timestamp;
    this.success = payload.success;
    this.messages = payload.message;
  }

  static getModelByType(type: string) {
    // ========================
    // staking
    // ========================
    if (type === '/cosmos.staking.v1beta1.MsgDelegate') {
      return MsgDelegate;
    }

    if (type === '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
      return MsgRedelegate;
    }

    if (type === '/cosmos.staking.v1beta1.MsgUndelegate') {
      return MsgUndelegate;
    }

    if (type === '/cosmos.staking.v1beta1.MsgCreateValidator') {
      return MsgCreateValidator;
    }

    if (type === '/cosmos.staking.v1beta1.MsgEditValidator') {
      return MsgEditValidator;
    }

    // ========================
    // bank
    // ========================

    if (type === '/cosmos.bank.v1beta1.MsgSend') {
      return MsgSend;
    }

    if (type === '/cosmos.bank.v1beta1.MsgMultiSend') {
      return MsgMultiSend;
    }

    // ========================
    // crisis
    // ========================

    if (type === '/cosmos.crisis.v1beta1.MsgVerifyInvariant') {
      return MsgVerifyInvariant;
    }

    // ========================
    // slashing
    // ========================

    if (type === '/cosmos.slashing.v1beta1.MsgUnjail') {
      return MsgUnjail;
    }

    // ========================
    // distribution
    // ========================
    if (type === '/cosmos.distribution.v1beta1.MsgFundCommunityPool') {
      return MsgFundCommunityPool;
    }

    if (type === '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress') {
      return MsgSetWithdrawAddress;
    }

    if (type === '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward') {
      return MsgWithdrawDelegatorReward;
    }

    // ========================
    // governance
    // ========================

    if (type === '/cosmos.gov.v1beta1.MsgDeposit') {
      return MsgDeposit;
    }

    if (type === '/cosmos.gov.v1beta1.MsgVote') {
      return MsgVote;
    }

    if (type === '/cosmos.gov.v1beta1.MsgSubmitProposal') {
      return MsgSubmitProposal;
    }

    return MsgUnknown;
  }

  static fromJson(json: any) {
    return new LatestActivity({
      height: json.height,
      hash: json.hash,
      timestamp: json.timestamp,
      success: json.success,
      messages: json?.messages.map((x) => {
        return this.getModelByType(x?.['@type']).fromJson(x);
      }),
    });
  }
}

export default LatestActivity;
