export class Proposal {
  public description: string

  public proposalId: string

  public proposalType: string

  public proposer: string

  public status: string

  public submitTime: string

  public title: string

  public votingEndTime: string

  public votingStartTime: string

  constructor(payload: any) {
    this.description = payload.description;
    this.proposalId = payload.proposalId;
    this.proposalType = payload.proposalType;
    this.proposer = payload.proposer;
    this.status = payload.status;
    this.submitTime = payload.submitTime;
    this.title = payload.title;
    this.votingEndTime = payload.votingEndTime;
    this.votingStartTime = payload.votingStartTime;
  }

  static fromJson(json: any) {
    return new Proposal({
      description: json.description,
      proposalId: json.proposal_id,
      proposalType: json.proposal_type,
      proposer: json.proposer,
      status: json.status,
      submitTime: json.submit_time,
      title: json.title,
      votingEndTime: json.voting_end_time,
      votingStartTime: json.voting_start_time,
    });
  }
}

export class Deposit {
  public amount:number

  public depositor: string

  public timestamp:string

  public totalDeposit: string

  constructor(payload: any) {
    this.amount = payload.amount;
    this.depositor = payload.depositor;
    this.timestamp = payload.timestamp;
    this.totalDeposit = payload.totalDeposit;
  }

  static fromJson(json: any) {
    return new Deposit({
      amount: json.amount,
      depositor: json.depositor,
      timestamp: json.timestamp,
      totalDeposit: json.total_deposit,
    });
  }
}

class Vote {
  public height: number

  public option: string

  public proposalId: number

  public timestamp: string

  public voter: string

  public votingPower: string

  constructor(payload: any) {
    this.height = payload.height;
    this.option = payload.option;
    this.proposalId = payload.proposalId;
    this.timestamp = payload.timestamp;
    this.voter = payload.voter;
    this.votingPower = payload.votingPower;
  }

  static fromJson(json: any) {
    return new Deposit({
      height: json.height,
      option: json.option,
      proposalId: json.proposal_id,
      timestamp: json.timestamp,
      voter: json.voter,
      votingPower: json.voting_power,
    });
  }
}

export class AllVote extends Vote {
  constructor(payload: any) {
    super(payload.height);
    super(payload.option);
    super(payload.proposalId);
    super(payload.timestamp);
    super(payload.voter);
    super(payload.votingPower);
  }
}

export class YesVote extends Vote {
  constructor(payload: any) {
    super(payload.height);
    super(payload.option);
    super(payload.proposalId);
    super(payload.timestamp);
    super(payload.voter);
    super(payload.votingPower);
  }
}
export class NoVote extends Vote {
  constructor(payload: any) {
    super(payload.height);
    super(payload.option);
    super(payload.proposalId);
    super(payload.timestamp);
    super(payload.voter);
    super(payload.votingPower);
  }
}
export class AbstainVote extends Vote {
  constructor(payload: any) {
    super(payload.height);
    super(payload.option);
    super(payload.proposalId);
    super(payload.timestamp);
    super(payload.voter);
    super(payload.votingPower);
  }
}

export class NoWithVetoVote extends Vote {
  constructor(payload: any) {
    super(payload.height);
    super(payload.option);
    super(payload.proposalId);
    super(payload.timestamp);
    super(payload.voter);
    super(payload.votingPower);
  }
}

export class TallyState {
  public abstain: number

  public height:number

  public no:number

  public noWithVeto:number

  public proposalId:number

  public yes: number

  constructor(payload: any) {
    this.abstain = payload.abstain;
    this.height = payload.height;
    this.no = payload.no;
    this.noWithVeto = payload.noWithVeto;
    this.proposalId = payload.proposalId;
    this.yes = payload.yes;
  }

  static fromJson(json: any) {
    return new TallyState({
      abstain: json.abstain,
      height: json.height,
      no: json.no,
      noWithVeto: json.no_with_veto,
      proposalId: json.proposal_id,
      yes: json.yes,
    });
  }
}
