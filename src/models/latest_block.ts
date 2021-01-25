import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';

class LatestBlock {
  public height: number;
  public tx: number;
  public hash: string;
  public timestamp: string;
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
  }

  static fromJson(json: any) {
    return new LatestBlock({
      height: json.height,
      tx: json.num_txs,
      hash: json.hash,
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
