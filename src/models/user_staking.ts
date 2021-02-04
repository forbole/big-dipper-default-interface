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

  constructor(payload: any) {
    this.delegations = payload.delegations;
    this.redelegations = payload.redelegations;
    this.unbonding = payload.unbonding;
  }

  static fromJson(json: any) {
    return new UserStaking({
      delegations: R.pathOr([], ['delegations'], json).map((delegation) => {
        return ({
          validatorAddress: delegation?.validator_address,
          amount: {
            denom: delegation?.amount?.denom,
            amount: delegation?.amount?.amount,
          },
          reward: {
            denom: delegation?.account?.[0]?.delegation_rewards?.amount.denom,
            amount: delegation?.account?.[0]?.delegation_rewards?.amount.amount,
          },
          selfDelegatedAmount: {
            denom: delegation?.account?.self_delegations?.[0]?.amount.denom,
            amount: delegation?.account?.self_delegations?.[0]?.amount.amount,
          },
          comission: delegation?.validator?.validator_commissions?.[0]?.commission,
          votingPower: delegation?.validator?.validator_voting_powers?.[0]?.voting_power,
        }
        );
      }),
      redelegations: R.pathOr([], ['redelegations'], json).map((redelegations) => {
        return ({
          srcValidatorAddress: redelegations?.src_validator_address,
          dstValidatorAddress: redelegations?.dst_validator_address,
          delegatorAddress: redelegations?.delegator_address,
          amount: {
            denom: redelegations?.amount?.denom,
            amount: redelegations?.amount?.amount,
          },
          height: redelegations?.height,
          expectedTime: redelegations?.completion_time,
        });
      }),

      unbonding: R.pathOr([], ['unbonding_delegations'], json).map((unbonding) => {
        return ({
          validatorAddress: unbonding?.validator_address,
          amount: {
            denom: unbonding?.amount?.denom,
            amount: unbonding?.amount?.amount,
          },
          height: unbonding?.height,
          expectedTime: unbonding?.completion_timestamp,
        });
      }),
    });
  }
}

export default UserStaking;
