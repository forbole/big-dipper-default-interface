import * as R from 'ramda';

class TotalVotingPower {
  public totalVotingPower: number;

  constructor(payload: any) {
    this.totalVotingPower = payload.totalVotingPower;
  }

  static fromJson(data: any) {
    return new TotalVotingPower({
      totalVotingPower: R.pathOr(0, ['total_voting_power', 'aggregate', 'sum', 'voting_power'], data),
    });
  }
}

export default TotalVotingPower;
