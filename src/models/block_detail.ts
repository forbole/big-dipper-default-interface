import * as R from 'ramda';

class BlockDetail {
  public hash: string;
  public timestamp: string;
  public tx: number;
  public validator: {
    moniker: string;
    identity: string | null;
    validatorAddress: string;
  }
  public height: number;

  constructor(payload: any) {
    this.hash = payload.hash;
    this.timestamp = payload.timestamp;
    this.tx = payload.tx;
    this.validator = payload.validator;
    this.height = payload.height;
  }

  static fromJson(json: any) {
    return new BlockDetail({
      hash: json.hash,
      timestamp: json.timestamp,
      tx: json.num_txs,
      validator: {
        moniker: R.pathOr('', ['validator', 'validator_descriptions', 0, 'moniker'], json),
        identity: R.pathOr('', ['validator', 'validator_descriptions', 0, 'identity'], json),
        validatorAddress: R.pathOr('', ['validator', 'validator_descriptions', 0, 'validator_address'], json),
      },
      height: json.height,
    });
  }
}

export default BlockDetail;
