import * as R from 'ramda';

class TotalVotingPower {
  public totalVotingPower: number;

  constructor(payload: any) {
    this.totalVotingPower = payload.totalVotingPower;
  }

  static fromJson(data: any) {
    return new TotalVotingPower({
      totalVotingPower: R.pathOr(0, ['total_voting_power', 'aggregate', 'sum', 'voting_power'], data),
      // undelegations: R.pathOr([], ['unbonding_delegations'], json).map((undelegation) => {
      //   return ({
      //     delegatorAddress: undelegation?.delegator_address,
      //     amount: {
      //       denom: undelegation?.amount?.denom,
      //       amount: undelegation?.amount?.amount,
      //     },
      //   });
      // }),
      // redelegations: R.pathOr([], ['redelegations'], json).map((redelegation) => {
      //   return ({
      //     delegatorAddress: redelegation?.delegator_address,
      //     srcValidatorAddress: redelegation?.src_validator_address,
      //     dstValidatorAddress: redelegation?.dst_validator_address,
      //     amount: {
      //       denom: redelegation?.amount?.denom,
      //       amount: redelegation?.amount?.amount,
      //     },
      //   });
      // }),
    });
  }
}

export default TotalVotingPower;
