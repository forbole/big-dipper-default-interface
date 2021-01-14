class BlockDetail {
  public hash: string;
  public timestamp: string;
  public tx: number;
  public validator: {
    moniker: string;
    identity: string | null;
    validatorAddress: string;
  }
  public preCommits: number;

  constructor(payload: any) {
    this.hash = payload.hash;
    this.timestamp = payload.timestamp;
    this.tx = payload.tx;
    this.validator = payload.validator;
    this.preCommits = payload.preCommits;
  }

  static fromJson(json: any) {
    return new BlockDetail({
      hash: json.hash,
      timestamp: json.timestamp,
      tx: json.num_txs,
      validator: {
        moniker: json?.validator?.validator_description?.moniker,
        identity: json?.validator?.validator_description?.identity,
        validatorAddress: json?.validator?.validator_description?.validator_address,
      },
      preCommits: json?.pre_commits,
    });
  }
}

export default BlockDetail;
