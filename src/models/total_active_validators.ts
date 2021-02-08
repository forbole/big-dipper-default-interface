import * as R from 'ramda';

class TotalActiveValidators {
  public active: number;
  public inactive: string;
  public total: number;

  constructor(payload) {
    this.active = payload.active;
    this.inactive = payload.inactive;
    this.total = payload.total;
  }

  static fromJson(json: any[]) {
    let active = 0;
    let inactive = 0;
    json.forEach((x) => {
      const status = R.pathOr(null, ['validator_statuses', 0, 'status'], x);
      const jailed = R.pathOr(null, ['validator_statuses', 0, 'jailed'], x);

      if (status === 3 && !jailed) {
        active += 1;
      } else if (status !== null || (status === 3 && jailed)) {
        inactive += 1;
      }
    });
    const total = active + inactive;

    return new TotalActiveValidators({
      active,
      inactive,
      total,
    });
  }
}

export default TotalActiveValidators;
