import * as R from 'ramda';

type DefaultDelegationType = {
  validatorAddress: string;
  amount: {
      denom: string;
      amount: number;
  }
  commission: number;
  votingPower: number;
}

type DefaultUnbondingType = {
  validatorAddress: string;
  amount: {
      denom: string;
      amount: number;
  }
  height?: number;
  expectedTime: string;
}

type DefaultRedelegationType = {
  srcValidatorAddress: string;
  dstValidatorAddress: string;
  delegatorAddress: string;
  amount: {
      denom: string;
      amount: number;
  }
  height: number;
  expectedTime: string;
}

class UserStaking {
  public delegations: DefaultDelegationType[];
  public rewards?: {
    validatorAddress: string;
    delegatorAddress: string;
    amount: {
      denom: string;
      amount: number;
    }}[];
  public redelegations: DefaultRedelegationType[];
  public unbonding: DefaultUnbondingType[];
  public totalVotingPower: number;

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
          amount: {
            denom: delegation?.amount?.denom,
            amount: delegation?.amount?.amount,
          },
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
          amount: {
            denom:
            R.pathOr('', ['amount', 0, 'denom'], reward),
            amount:
            R.pathOr(0, ['amount', 0, 'amount'], reward),
          },
        });
      }),
      redelegations: R.pathOr([], ['account', 0, 'redelegations'], json).map((redelegation) => {
        return ({
          srcValidatorAddress: redelegation?.src_validator_address,
          dstValidatorAddress: redelegation?.dst_validator_address,
          delegatorAddress: redelegation?.delegator_address,
          amount: {
            denom: redelegation?.amount?.denom,
            amount: redelegation?.amount?.amount,
          },
          expectedTime: redelegation?.completion_time,
        });
      }),

      unbonding: R.pathOr([], ['account', 0, 'unbondings'], json).map((unbonding) => {
        return ({
          validatorAddress: unbonding?.validator_address,
          amount: {
            denom: unbonding?.amount?.denom,
            amount: unbonding?.amount?.amount,
          },
          expectedTime: unbonding?.completion_timestamp,
        });
      }),
      totalVotingPower: R.pathOr(0, ['total_voting_power', 'aggregate', 'sum', 'voting_power'], json),
    });
  }
}

export default UserStaking;
