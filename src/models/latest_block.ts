import * as R from 'ramda';

class LatestBlock {
  public height: number;
  public tx: number;
  public hash: string;
  public timestamp: string;
  public success: boolean;
  public validator: {
    moniker: string;
    validatorAddress: string;
    identity: string | null;
  }

  constructor(payload: any) {
    this.height = payload.height;
    this.tx = payload.tx;
    this.hash = payload.hash;
    this.timestamp = payload.timestamp;
    this.validator = payload.validator;
    this.success = payload.success;
  }

  static fromJson(json: any) {
    return new LatestBlock({
      height: json.height,
      tx: json.num_txs,
      hash: json.hash,
      success: json.success,
      timestamp: json.timestamp,
      validator: {
        moniker: R.pathOr('', ['validator', 'validator_description', 'moniker'], json),
        validatorAddress: R.pathOr('', ['validator', 'validator_description', 'validator_address'], json),
        identity: R.pathOr('', ['validator', 'validator_description', 'identity'], json),
      },
    });
  }
}

export default LatestBlock;
