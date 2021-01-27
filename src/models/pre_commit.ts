import * as R from 'ramda';

class PreCommit {
  public votingPower: number;
  public validatorAddress: string;
  public identity: string | null;
  public moniker: string | null;
  public proposerPriority: number;

  constructor(payload) {
    this.votingPower = payload.votingPower;
    this.validatorAddress = payload.validatorAddress;
    this.identity = payload.identity;
    this.moniker = payload.moniker;
    this.proposerPriority = payload.proposerPriority;
  }

  static fromJson(json: any) {
    return new PreCommit({
      votingPower: json.voting_power,
      validatorAddress: json.validator_address,
      proposerPriority: json.proposer_priority,
      moniker: R.pathOr('', ['validator', 'validator_descriptions', 0, 'moniker'], json),
      identity: R.pathOr('', ['validator', 'validator_descriptions', 0, 'identity'], json),
    });
  }
}

export default PreCommit;
