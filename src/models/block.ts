import * as R from 'ramda';
import { Validator} from './index'

export class Block {
  public height: number;
  public blockTimeFromGensis: number;
  public blockTimeLastMin: number;
  public blockTimeLastHour: number;
  public blockTimeLastDay: number;
  public proposer: Validator;
  public hash: string;
  public numTxs: number;
  public timestamp: string;

  constructor(payload: any) {
    this.height = payload.height;
    this.blockTimeLastDay = payload.blockTimeLastDay;
    this.blockTimeLastHour = payload.blockTimeLastHour;
    this.blockTimeLastMin = payload.blockTimeLastMin;
    this.proposer = payload.proposer;
    this.hash = payload.hash;
    this.numTxs = payload.numTxs;
    this.timestamp= payload.timestmap;
  }
  static fromJson(json: any) {
    return new Block({
      height: json.height,
      blockTimeFromGensis: R.pathOr('N/A', ['block_time_from_gensis'], json),
      blockTimeLastMin: R.pathOr('N/A', ['block_time_from_gensis'], json),
      blockTimeLastHour: R.pathOr('N/A', ['block_time_from_gensis'], json),
      blockTimeLastDay: R.pathOr('N/A', ['block_time_from_gensis'], json),
      proposer: Validator.fromJson(json.consensus_address),
      hash: json.hash,
      numTxs: json.num_txs,
      timestamp: json.timestamp,
    });
  }
}

