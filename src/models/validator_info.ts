import numeral from 'numeral';

class ValidatorInfo {
  public operatorAddress: string;
  public selfDelegateAddress: string;
  public consensusAddress: string;
  public maxChangeRate: number;
  public maxRate: number;
  public commissionRate: number;

  constructor(payload: any) {
    this.operatorAddress = payload.operatorAddress;
    this.selfDelegateAddress = payload.selfDelegateAddress;
    this.consensusAddress = payload.consensusAddress;
    this.maxChangeRate = payload.maxChangeRate;
    this.maxRate = payload.maxRate;
    this.commissionRate = payload.commissionRate;
  }

  static fromJson(json: any) {
    return new ValidatorInfo({
      operatorAddress: json?.validator_info?.operator_address,
      selfDelegateAddress: json?.validator_info?.self_delegate_address,
      consensusAddress: json?.validator_info?.consensus_address,
      maxChangeRate: numeral(json?.validator_info?.max_change_rate).value(),
      maxRate: numeral(json?.validator_info?.max_rate).value(),
      commissionRate: numeral(json?.validator_commission?.commission).value(),
    });
  }
}

export default ValidatorInfo;
