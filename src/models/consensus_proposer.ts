import * as R from 'ramda';

class Proposer {
  public height: number;
  public validator: {
    consensusAddress: string;
    moniker: string;
    identity: string;
    votingPower: number;
  };

  constructor(payload: any) {
    this.height = payload.height;
    this.validator = payload.validator;
  }

  static fromJson(json: any) {
    return new Proposer({
      height: json.height ?? 0,
      validator: {
        consensusAddress: R.pathOr('', ['validator', 'consensus_address'], json) ?? '',
        moniker: R.pathOr('', ['validator', 'validator_description', 'moniker'], json) ?? '',
        identity: R.pathOr('', ['validator', 'validator_description', 'identity'], json) ?? '',
        votingPower: R.pathOr('', ['validator', 'validator_voting_power', 'voting_power'], json) ?? 0,
      },
    });
  }
}

export default Proposer;
