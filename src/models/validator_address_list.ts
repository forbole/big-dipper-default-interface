import * as R from 'ramda';

class ValidatorAddressList {
  public operatorAddress: string;
  public selfDelegateAddress: string;
  public moniker?: string;
  public id?: string;

  constructor(payload: any) {
    this.id = payload.id;
    this.operatorAddress = payload.operatorAddress;
    this.selfDelegateAddress = payload.selfDelegateAddress;
    this.moniker = payload.moniker;
  }

  static fromJson(data: any) {
    return new ValidatorAddressList({
      id: R.pathOr(null, ['validator_description', 'identity'], data),
      moniker: R.pathOr(null, ['validator_description', 'moniker'], data),
      operatorAddress: data?.validator_info?.operator_address,
      selfDelegateAddress: data?.validator_info?.self_delegate_address,
    });
  }
}

export default ValidatorAddressList;
