class MsgSetWithdrawAddress {
  public type: string;
  public delegatorAddress: string;
  public withdrawalAddress: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.withdrawalAddress = payload.withdrawalAddress;
  }

  static fromJson(json: any) {
    return new MsgSetWithdrawAddress({
      type: json['@type'],
      delegatorAddress: json.delegator_address,
      withdrawalAddress: json.withdraw_address,
    });
  }
}

export default MsgSetWithdrawAddress;
