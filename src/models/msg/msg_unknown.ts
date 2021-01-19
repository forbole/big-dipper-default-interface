class MsgUnknown {
  public category: 'bank' | 'crisis' | 'distribution' | 'governance' | 'slashing' | 'staking' | 'unknown';
  public type: string;
  public validatorAddress: string;

  constructor(payload: any) {
    this.category = 'unknown';
    this.type = payload.type;
    this.validatorAddress = payload.validatorAddress;
  }

  static fromJson(json: any) {
    return new MsgUnknown({
      type: json['@type'],
      data: json,
    });
  }
}

export default MsgUnknown;
