import numeral from 'numeral';

class MsgVote {
  public type: string;
  public proposalId: number | string;
  public voter: string;
  public option: 'VOTE_OPTION_YES' | 'VOTE_OPTION_ABSTAIN' | 'VOTE_OPTION_NO' | 'VOTE_OPTION_NO_WITH_VETO';

  constructor(payload: any) {
    this.type = payload.type;
    this.proposalId = payload.proposalId;
    this.voter = payload.voter;
    this.option = payload.option;
  }

  static fromJson(json: any) {
    return new MsgVote({
      type: json['@type'],
      proposalId: numeral(json?.proposal_id).value(),
      voter: json.voter,
      option: json.option,
    });
  }
}

export default MsgVote;
