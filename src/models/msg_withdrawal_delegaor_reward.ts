class MsgWithdrawDelegatorReward {
  public type: string;
  public delegatorAddress: string;
  public validatorAddress: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.delegatorAddress = payload.delegatorAddress;
    this.validatorAddress = payload.validatorAddress;
  }

  static fromJson(json: any) {
    return new MsgWithdrawDelegatorReward({
      type: json['@type'],
      delegatorAddress: json.delegator_address,
      validatorAddress: json.validator_address,
    });
  }
}

export default MsgWithdrawDelegatorReward;
