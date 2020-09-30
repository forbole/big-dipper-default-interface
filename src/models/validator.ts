import * as R from 'ramda';

export class ActiveValidator {
  public moniker: string;
  public votingPower: Number;
  public self: Number;
  public commission: Number;
  public selfDelegationAddress: string;

  constructor(payload: any) {
    this.moniker = payload.moniker;
  }
  static fromJson(json: any) {
    return new ActiveValidator({
      consensusAddress: json.consensus_address,
      moniker: json.moniker,

    });
  }
}