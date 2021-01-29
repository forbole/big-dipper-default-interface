import * as R from 'ramda';

class ValidatorLatestBlock {
  public height: number;
  public proposerAddress: string;
  public blockVotingPower: number;
  public signedVotingPower: number;
  public votingPower: number;
  public gasUsed: number;
  public gasWanted: number;
  public voted: boolean;
  public signatures: number;

  constructor(payload: any) {
    this.height = payload.height;
    this.proposerAddress = payload.proposerAddress;
    this.blockVotingPower = payload.blockVotingPower;
    this.signedVotingPower = payload.signedVotingPower;
    this.votingPower = payload.votingPower;
    this.gasUsed = payload.gasUsed;
    this.gasWanted = payload.gasWanted;
    this.voted = payload.voted;
    this.signatures = payload.signatures;
  }

  static fromJson(json: any) {
    const blockVotingPower = R.pathOr(0, ['validator_voting_powers_aggregate', 'aggregate', 'sum', 'voting_power'], json);
    const signedVotingPower = R.pathOr(0, ['pre_commits_aggregate', 'aggregate', 'sum', 'voting_power'], json);
    const votingPower = (signedVotingPower / blockVotingPower) * 100;
    return new ValidatorLatestBlock({
      height: R.pathOr(0, ['height'], json),
      proposerAddress: R.pathOr(0, ['proposer_address'], json),
      blockVotingPower,
      signedVotingPower,
      votingPower,
      gasUsed: R.pathOr(0, ['transactions_aggregate', 'aggregate', 'sum', 'gas_used'], json),
      gasWanted: R.pathOr(0, ['transactions_aggregate', 'aggregate', 'sum', 'gas_wanted'], json),
      voted: !!json?.pre_commits.length,
      signatures: R.pathOr(0, ['pre_commits_aggregate', 'aggregate', 'count'], json),
    });
  }
}

export default ValidatorLatestBlock;
