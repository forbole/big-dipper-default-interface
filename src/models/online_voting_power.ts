import * as R from 'ramda';

class OnlineVotingPower {
  public votingPower: number;
  public height: number;

  constructor(payload: any) {
    this.height = payload.height;
    this.votingPower = payload.votingPower;
  }

  static fromJson(json: any) {
    return new OnlineVotingPower({
      height: json.height,
      votingPower: R.pathOr(0, ['pre_commits_aggregate', 'aggregate', 'sum', 'voting_power'], json),
    });
  }
}

export default OnlineVotingPower;
