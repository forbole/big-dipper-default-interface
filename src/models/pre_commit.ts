class PreCommit {
  public votingPower: number;
  public validatorAddress: string;
  public identity: string | null;
  public moniker: string | null;

  constructor(payload) {
    this.votingPower = payload.votingPower;
    this.validatorAddress = payload.validatorAddress;
    this.identity = payload.identity;
    this.moniker = payload.moniker;
  }

  static fromJson(json: any) {
    return new PreCommit({
      votingPower: json.voting_power,
      validatorAddress: json.validator_address,
      identity: json?.validator_descriptions?.identity,
      moniker: json?.validator_descriptions?.moniker,
    });
  }
}

export default PreCommit;
