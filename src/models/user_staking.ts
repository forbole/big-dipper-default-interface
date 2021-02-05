import * as R from 'ramda';

type DefaultDelegationType = {
  validatorAddress: string;
  amount: {
      denom: string;
      amount: number;
  }
  selfDelegatedAmount?: {
    denom: string;
    amount: number;
  };
  reward?: {
    denom: string;
    amount: number;
  };
  comission: number;
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
  public redelegations: DefaultRedelegationType[];
  public unbonding: DefaultUnbondingType[];
  public totalVotingPower: number;

  constructor(payload: any) {
    this.delegations = payload.delegations;
    this.redelegations = payload.redelegations;
    this.unbonding = payload.unbonding;
    this.totalVotingPower = payload.totalVotingPower;
  }

  static fromJson(json: any) {
    console.log('json', json);
    return new UserStaking({
      delegations: R.pathOr([], ['delegations'], json).map((delegation) => {
        return ({
          validatorAddress: delegation?.delegations?.[0]?.validator_address,
          amount: {
            denom: delegation?.delegations?.[0]?.amount?.denom,
            amount: delegation?.delegations?.[0]?.amount?.amount,
          },
          reward: {
            denom: delegation?.delegation_rewards?.[0]?.amount?.denom,
            amount: delegation?.delegation_rewards?.[0]?.amount?.amount,
          },
          comission:
            delegation?.delegations?.[0]?.validator?.validator_commissions?.[0]?.commission,
          votingPower:
            delegation?.delegations?.[0]?.validator?.validator_voting_powers?.[0]?.voting_power,
        }
        );
      }),
      redelegations: R.pathOr([], ['redelegations'], json).map((redelegations) => {
        return ({
          srcValidatorAddress: redelegations?.redelegations?.[0]?.src_validator_address,
          dstValidatorAddress: redelegations?.redelegations?.[0]?.dst_validator_address,
          delegatorAddress: redelegations?.redelegations?.[0]?.delegator_address,
          amount: {
            denom: redelegations?.redelegations?.[0]?.amount?.denom,
            amount: redelegations?.redelegations?.[0]?.amount?.amount,
          },
          expectedTime: redelegations?.redelegations?.[0]?.completion_time,
        });
      }),

      unbonding: R.pathOr([], ['unbondings'], json).map((unbonding) => {
        return ({
          validatorAddress: unbonding?.unbonding_delegations?.[0]?.validator_address,
          amount: {
            denom: unbonding?.unbonding_delegations?.[0]?.amount?.denom,
            amount: unbonding?.unbonding_delegations?.[0]?.amount?.amount,
          },
          expectedTime: unbonding?.unbonding_delegations?.[0]?.completion_timestamp,
        });
      }),
      totalVotingPower: R.pathOr(0, ['total_voting_power', 'aggregate', 'sum', 'voting_power'], json),
    });
  }
}

export default UserStaking;
