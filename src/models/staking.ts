/* eslint-disable */

export class ValidatorDiscription {
  public details: string;

  public identity: string;

  public moniker: string;

  public operatorAddress: string;

  public height: number;

  constructor(payload: any) {
    this.details = payload.details;
    this.identity = payload.identity;
    this.moniker = payload.moniker;
    this.operatorAddress = payload.operatorAddress;
    this.height = payload.height;
  }

  static fromJson(json: any) {
    return new ValidatorDiscription({
      details: json.details,
      identity: json.identity,
      moniker: json.moniker,
      operatorAddress: json.operator_address,
      height: json.height,

    });
  }
}

export class VALIDATOR_INFO {
  public selfDelegateAddress: string;

  public operatorAddress: string;

  public commission: string;

  public maxChangeRate: string;

  public maxRate: string;

  constructor(payload: any) {
    this.selfDelegateAddress = payload.selfDelegateAddress;
    this.operatorAddress = payload.operatorAddress;
    this.commission = payload.commission;
    this.maxChangeRate = payload.maxChangeRate;
    this.maxRate = payload.maxRate;
  }

  static fromJson(json: any) {
    return new VALIDATOR_INFO({
      selfDelegateAddress: json.self_delegate_address,
      operatorAddress: json.operator_address,
      commission: json.commission,
      maxChangeRate: json.max_change_rate,
      maxRate: json.max_rate,
    });
  }
}

//! !TWO COUNTER SO LOOK UP HOW JSON PARSE
export class POTENTIAL {
  public selfDelegateAddress: string;

  public operatorAddress: string;

  public maxChangeRate: string;

  public maxRate: string;

  public commission: string;

  public proposalCount: number;

  public delegationShareCount: number;

  public signedBlocksWindow: number;

  public missedBlocksCounter: number;

  constructor(payload: any) {
    this.selfDelegateAddress = payload.selfDelegate_address;
    this.operatorAddress = payload.operatorAddress;
    this.maxChangeRate = payload.maxChangeRate;
    this.maxRate = payload.maxRate;
    this.commission = payload.commission;
    this.proposalCount = payload.proposalCount;
    this.delegationShareCount = payload.delegationShareCount;
    this.signedBlocksWindow = payload.signedBlocksWindow;
    this.missedBlocksCounter = payload.missedBlocksCounter;
  }

  static fromJson(json: any) {
    return new POTENTIAL({
      selfDelegateAddress: json.self_delegate_address,
      operatorAddress: json.operator_address,
      maxChangeRate: json.max_change_rate,
      maxRate: json.max_rate,
      commission: json.commission,
      proposalCount: json.proposal_aggregate.aggregate.count,
      delegationShareCount: json.validator_delegation_shares_aggregate.aggregate.count,
      signedBlocksWindow: json.signed_blocks_window,
      missedBlocksCounter: json.missed_blocks_counter,

    });
  }
}

export class VotingPower {
  public votingPower: number;

  public height: number;

  public shares: number;

  public timestamp: string;

  public selfDelegateAddress: string;

  constructor(payload: any) {
    this.votingPower = payload.votingPower;
    this.height = payload.height;
    this.shares = payload.shares;
    this.timestamp = payload.timestamp;
    this.selfDelegateAddress = payload.selfDelegateAddress;
  }

  static fromJson(json: any) {
    return new VotingPower({
      votingPower: json.voting_power,
      height: json.height,
      shares: json.shares,
      timestamp: json.timestamp,
      selfDelegateAddress: json.self_delegate_address,
    });
  }
}
export class Delegation {
  public shares: string;

  public delegatorAddress: string;

  constructor(payload: any) {
    this.shares = payload.shares;
    this.delegatorAddress = payload.delegatorAddress;
  }

  static fromJson(json: any) {
    return new Delegation({
      shares: json.shares,
      delegatorAddress: json.delegator_address,

    });
  }
}

export class Redelegation {
  public amount: number;

  public srcValidatorAddress: string;

  public dstValidatorAddress: string;

  public count: number;

  constructor(payload: any) {
    this.amount = payload.amount;
    this.srcValidatorAddress = payload.srcValidatorAddress;
    this.dstValidatorAddress = payload.dstValidatorAddress;
    this.count = payload.count;
  }

  static fromJson(json: any) {
    return new Redelegation({
      amount: json.amount,
      srcValidatorAddress: json.src_validator_address,
      dstValidatorAddress: json.dst_validator_address,
      count: json.count,
    });
  }
}

export class Undelegation {
  public count: number;

  public amount: number;

  public delegatorAddress: number;

  constructor(payload: any) {
    this.count = payload.count;
    this.amount = payload.amount;
    this.delegatorAddress = payload.delegatorAddress;
  }

  static fromJson(json: any) {
    return new Undelegation({
      count: json.count,
      amount: json.amount,
      delegatorAddress: json.delegator_address,

    });
  }
}

export class ValidatorList {
  public moniker: string;

  public selfDelegateAddress: string;

  public delegatorAddress: string;

  public operatorAddress: string;

  public shares: string;

  public commission: number;

  public votingPower: number;

  public missedBlocksCounte: number;

  public signedBlocksWindow: number;

  constructor(payload: any) {
    this.moniker = payload.moniker;
    this.selfDelegateAddress = payload.selfDelegateAddress;
    this.delegatorAddress = payload.delegatorAddress;
    this.operatorAddress = payload.operatorAddress;
    this.shares = payload.shares;
    this.commission = payload.commission;
    this.votingPower = payload.votingPower;
    this.missedBlocksCounte = payload.missedBlocksCounte;
    this.signedBlocksWindow = payload.signedBlocksWindow;
  }

  static fromJson(json: any) {
    return new ValidatorList({
      moniker: json.moniker,
      selfDelegateAddress: json.self_delegate_address,
      delegatorAddress: json.delegator_address,
      operatorAddress: json.operator_address,
      shares: json.shares,
      commission: json.commission,
      votingPower: json.voting_power,
      missedBlocksCounte: json.missed_blocks_counte,
      signedBlocksWindow: json.signed_blocks_window,

    });
  }
}
