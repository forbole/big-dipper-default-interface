import * as R from 'ramda';
// import { chainConfig } from '@src/chain_config';

class ValidatorList {
  public moniker: number;
  public validatorAddress: string;
  public votingPower: number;
  public selfDelegations: number;
  public commission: number;
  public condition: number;
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
    this.condition = payload.condition;
    this.status = payload.status;
  }

  static fromJson(json: any) {
    // const totalSupply = R.pathOr([], ['total_tokens', 0, 'coins'], data).reduce((a, b) => {
    //   if (b.denom === chainConfig.base) {
    //     return b;
    //   }
    //   return a;
    // }, null);

    // const communityPool = R.pathOr([], ['community_pool', 0, 'coins'], data).reduce((a, b) => {
    //   if (b.denom === chainConfig.base) {
    //     return b;
    //   }
    //   return a;
    // }, null);

    return new ValidatorList({
      moniker: R.pathOr('', ['validator_descriptions', 'moniker'], json),
      validatorAddress: R.pathOr('', ['validator_info', 'operator_address'], json),
      // votingPower
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
