import { Address } from "cluster";

export class BlockTime {
  public averageTime: number;
  
  constructor(payload: any) {
    this.averageTime = payload.averageTime;
  }
  static fromJson(json: any) {
    return new BlockTime({
      consensusAddress: json.average_time,
    });
  }
}

export class BlockInfo {
  public hash: string;
  public moniker: string;
  public height: number;
  public operator: string;
  public numTxs: number;
  public timestamp: string;
  
  constructor(payload: any) {
    this.hash= payload.hash;
    this.moniker= payload.moniker ;
    this.height= payload.height;
    this.operator= payload.operator;
    this.numTxs= payload.numTxs ;
    this.timestamp = payload.timestamp;
  }

  static fromJson(json: any) {
    return new BlockInfo({
      hash:json.hash,
      moniker:json.moniker,
      height:json.height,
      operator:json.operator_address,
      numTxs:json.num_txs,
      timestamp:json.timestamp,
    });
  }

}