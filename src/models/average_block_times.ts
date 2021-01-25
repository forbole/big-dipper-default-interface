import * as R from 'ramda';

class AverageBlockTimes {
  public allTime: number;
  public lastMinute: number;
  public lastHour: number;
  public lastDay: number;

  constructor(payload: any) {
    this.allTime = payload.allTime;
    this.lastMinute = payload.lastMinute;
    this.lastHour = payload.lastHour;
    this.lastDay = payload.lastDay;
  }

  static fromJson(data: any) {
    return new AverageBlockTimes({
      allTime: R.pathOr(0, ['average_block_time_from_genesis', 0, 'average_time'], data),
      lastMinute: R.pathOr(0, ['average_block_time_per_minute', 0, 'average_time'], data),
      lastHour: R.pathOr(0, ['average_block_time_per_hour', 0, 'average_time'], data),
      lastDay: R.pathOr(0, ['average_block_time_per_day', 0, 'average_time'], data),
    });
  }
}

export default AverageBlockTimes;
