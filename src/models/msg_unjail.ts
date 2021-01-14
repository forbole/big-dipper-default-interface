class MsgUnjail {
  public type: string;
  public validatorAddress: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.validatorAddress = payload.validatorAddress;
  }

  static fromJson(json: any) {
    return new MsgUnjail({
      type: json['@type'],
      validatorAddress: json.validator_addr,
    });
  }
}

export default MsgUnjail;
