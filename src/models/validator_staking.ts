import * as R from 'ramda';

type DefaultDelegationType = {
  delegatorAddress: string;
    amount: {
      denom: string;
      amount: number;
    }
}

class ValidatorStaking {
  public delegations: DefaultDelegationType[];
  public undelegations: DefaultDelegationType[];
  public redelegations: {
    srcValidatorAddress: string;
    dstValidatorAddress: string;
    delegatorAddress: string;
    amount: {
      denom: string;
      amount: number;
    }
  }[];

  constructor(payload: any) {
    this.delegations = payload.delegations;
    this.redelegations = payload.redelegations;
    this.undelegations = payload.undelegations;
  }

  static fromJson(json: any) {
    const redelegations = [...R.pathOr([], ['redelegationsByDstValidatorAddress'], json), ...R.pathOr([], ['redelegationsBySrcValidatorAddress'], json)];

    return new ValidatorStaking({
      delegations: R.pathOr([], ['delegations'], json).map((delegation) => {
        return ({
          delegatorAddress: delegation?.delegator_address,
          amount: {
            denom: delegation?.amount?.denom,
            amount: delegation?.amount?.amount,
          },
        });
      }),
      undelegations: R.pathOr([], ['unbonding_delegations'], json).map((undelegation) => {
        return ({
          delegatorAddress: undelegation?.delegator_address,
          amount: {
            denom: undelegation?.amount?.denom,
            amount: undelegation?.amount?.amount,
          },
        });
      }),
      redelegations: redelegations.map((redelegation) => {
        return ({
          delegatorAddress: redelegation?.delegator_address,
          srcValidatorAddress: redelegation?.src_validator_address,
          dstValidatorAddress: redelegation?.dst_validator_address,
          amount: {
            denom: redelegation?.amount?.denom,
            amount: redelegation?.amount?.amount,
          },
        });
      }),
    });
  }
}

export default ValidatorStaking;
