import * as R from 'ramda';

type DefaultDelegationType = {
  validatorAddress: string;
  amount: {
      denom: string;
      amount: number;
  }
  height?: number;
  selfDelegatedAmount?: {
    denom: string;
    amount: number;
  };
  reward?: {
    denom: string;
    amount: number;
  };
  comission: bigint;
}

type DefaultRedelegationType = {
  srcValidatorAddress: string;
  dstValidatorAddress: string;
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
  public unbonding: DefaultDelegationType[];

  constructor(payload: any) {
    this.delegations = payload.delegations;
    this.redelegations = payload.redelegations;
    this.unbonding = payload.unbonding;
  }

  static fromJson(json: any) {
    console.log('model', json);
    return new UserStaking({

      delegations: R.pathOr([{
        validatorAddress: 'address',
      }], ['delegations'], json).map((delegation) => {
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
            denom: delegation?.account?.[0]?.self_delegations?.amount.denom,
            amount: delegation?.account?.[0]?.self_delegations?.amount.amount,
          },
          comission: delegation?.validator?.[0]?.validator_commissions?.[0].commission,
        });
      }),

      redelegations: R.pathOr([{
        srcValidatorAddress: 'address',
      }], ['redelegations'], json).map((redelegations) => {
        return ({
          srcValidatorAddress: redelegations?.src_validator_address,
          dstValidatorAddress: redelegations?.dst_validator_address,
          amount: {
            denom: redelegations?.amount?.denom,
            amount: redelegations?.amount?.amount,
          },
          height: redelegations?.height,
          expectedTime: redelegations?.completion_time,
        });
      }),

      unbonding: R.pathOr([{
        validatorAddress: 'address',
      }], ['unbonding_delegations'], json).map((unbonding) => {
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
