import { Address } from "cluster";



class BlockTime {
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

export class BlockTimeLastMinute extends BlockTime{
  constructor(payload: any) {
    super(payload.averageTime)
  }
}
export class BlockTimeLastHour extends BlockTime{
  constructor(payload: any) {
    super(payload.averageTime)
  }
}
export class BlockTimeLastDay extends BlockTime{
  constructor(payload: any) {
    super(payload.averageTime)
  }
}
export class BlockTimeGenesis extends BlockTime{
  constructor(payload: any) {
    super(payload.averageTime)
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

export class ConsensusState{
  public height: number;
  public round: number;
  public step: number;

  constructor(payload: any) {
    this.height= payload.height;
    this.round= payload.round;
    this.step= payload.step ;
  }
}
