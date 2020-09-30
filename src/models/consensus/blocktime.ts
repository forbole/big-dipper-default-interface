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
