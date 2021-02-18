import * as R from 'ramda';
import { chainConfig } from '@src/chain_config';

class UserStaking {
  public delegations?: {
    validatorAddress: string;
    amount: number;
    commission: number;
    votingPower: number;
  }[];
  public rewards?: {
    validatorAddress: string;
    delegatorAddress: string;
    amount: number;
  }[];
  public redelegations?: {
    srcValidatorAddress: string;
    dstValidatorAddress: string;
    delegatorAddress: string;
    amount: number;
    height: number;
    expectedTime: string;
  }[];
  public unbonding?: {
    validatorAddress: string;
    amount: number;
    height?: number;
    expectedTime: string;
  }[];
  public totalVotingPower?: number;

  constructor(payload: any) {
    this.delegations = payload.delegations;
    this.rewards = payload.rewards;
    this.redelegations = payload.redelegations;
    this.unbonding = payload.unbonding;
    this.totalVotingPower = payload.totalVotingPower;
  }

  static fromJson(json: any) {
    return new UserStaking({
      delegations: R.pathOr([], ['account', 0, 'delegations'], json).map((delegation) => {
        return ({
          validatorAddress: delegation?.validator_address,
          amount: delegation.amount.denom === chainConfig.base ? delegation.amount.amount : 0,
          commission:
            R.pathOr(0, ['validator', 'validator_commissions', 0, 'commission'], delegation),
          votingPower:
            R.pathOr(0, ['validator', 'validator_voting_powers', 0, 'voting_power'], delegation),
        }
        );
      }),
      rewards: R.pathOr([], ['delegation_reward'], json).map((reward) => {
        return ({
          validatorAddress: reward?.validator_address,
          delegatorAddress: reward?.delegator_address,
          amount: R.pathOr(0, ['amount'],
            R.pathOr([], ['amount'], reward).filter((x) => x.denom === chainConfig.base)),
        });
      }),
      redelegations: R.pathOr([], ['account', 0, 'redelegations'], json).map((redelegation) => {
        return ({
          srcValidatorAddress: redelegation?.src_validator_address,
          dstValidatorAddress: redelegation?.dst_validator_address,
          delegatorAddress: redelegation?.delegator_address,
          amount: redelegation.amount.denom === chainConfig.base ? redelegation.amount.amount : 0,
          expectedTime: redelegation?.completion_time,
        });
      }),

      unbonding: R.pathOr([], ['account', 0, 'unbondings'], json).map((unbonding) => {
        return ({
          validatorAddress: unbonding?.validator_address,
          amount: unbonding.amount.denom === chainConfig.base ? unbonding.amount.amount : 0,
          expectedTime: unbonding?.completion_timestamp,
        });
      }),
      totalVotingPower: R.pathOr(0, ['total_voting_power', 'aggregate', 'sum', 'voting_power'], json),
    });
  }
}

export default UserStaking;
