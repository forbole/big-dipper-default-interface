import * as R from 'ramda';

class ValidatorList {
  public moniker: number;
  public validatorAddress: string;
  public votingPower: number;
  public selfDelegations: number;
  public commission: number;
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
  }

  static fromJson(json: any) {
    return new ValidatorList({
      moniker: R.pathOr('', ['validator_descriptions', 0, 'moniker'], json),
      validatorAddress: R.pathOr('', ['validator_info', 'operator_address'], json),
      votingPower: R.pathOr(0, ['validator_voting_powers', 0, 'voting_power']),
      selfDelegations: R.pathOr(0, ['self_delegations', 0, 'amount'], json),
      commission: R.pathOr(0, ['validator_commissions', 0, 'commission'], json),
      status: {
        status: R.pathOr(null, ['validator_statuses', 0, 'status'], json),
        jailed: R.pathOr(null, ['validator_statuses', 0, 'jailed'], json),
      },
    });
  }
}

export default ValidatorList;

// {
//   "data": {
//     "pool": [
//       {
//         "bonded_tokens": 143625038897,
//         "not_bonded_tokens": 1036827710429
//       }
//     ],
//     "validator": [
//       {
//         "validator_info": {
//           "operator_address": "desmosvaloper1qpm8wutycha3ncd0u3w9g42v89xnnfs6hgcudl"
//         },
//         "validator_descriptions": [
//           {
//             "moniker": "liray-unendlich",
//             "identity": null
//           }
//         ],
//         "validator_voting_powers": [],
//         "validator_commissions": [
//           {
//             "commission": 0.3
//           }
//         ],
//         "validator_statuses": [
//           {
//             "height": 103385,
//             "jailed": true,
//             "status": 1
//           }
//         ],
//         "validator_signing_infos": [
//           {
//             "missed_blocks_counter": 2
//           }
//         ],
//         "self_delegations": []
//       }
//     ],
//     "slashing_params": [
//       {
//         "signed_block_window": 720
//       }
//     ]
//   }
// }
