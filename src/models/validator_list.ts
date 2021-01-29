import * as R from 'ramda';

class ValidatorList {
  public moniker: string;
  public validatorAddress: string;
  public votingPower: number;
  public selfDelegations: number;
  public commission: number;
  public missedBlockCounter: number;
  public status: {
    status: number;
    jailed: boolean;
  }
  constructor(payload: any) {
    this.moniker = payload.moniker;
    this.validatorAddress = payload.validatorAddress;
    this.votingPower = payload.votingPower;
    this.selfDelegations = payload.selfDelegations;
    this.commission = payload.commission;
    this.status = payload.status;
    this.missedBlockCounter = payload.missedBlockCounter;
  }

  static fromJson(json: any) {
    return new ValidatorList({
      moniker: R.pathOr('', ['validator_descriptions', 0, 'moniker'], json),
      validatorAddress: R.pathOr('', ['validator_info', 'operator_address'], json),
      votingPower: R.pathOr(0, ['validator_voting_powers', 0, 'voting_power']),
      selfDelegations: R.pathOr(0, ['self_delegations', 0, 'amount'], json),
      commission: R.pathOr(0, ['validator_commissions', 0, 'commission'], json),
      missedBlockCounter: R.pathOr(0, ['validator_signing_infos', 0, 'missed_blocks_counter'], json),
      status: {
        status: R.pathOr(null, ['validator_statuses', 0, 'status'], json),
        jailed: R.pathOr(null, ['validator_statuses', 0, 'jailed'], json),
      },
    });
  }
}

export default ValidatorList;
