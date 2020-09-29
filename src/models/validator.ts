import * as R from 'ramda';

export class Validator {
  public consensusAddress: string;
  public moniker: string;
  

  constructor(payload: any) {
    this.moniker = payload.moniker;
  }
  static fromJson(json: any) {
    return new Validator({
      consensusAddress: json.consensus_address,
    });
  }
}