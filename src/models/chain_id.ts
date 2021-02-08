class ChainId {
  public id: string;

  constructor(payload: any) {
    this.id = payload.id;
  }

  static fromJson(json: any) {
    return new ChainId({
      id: json?.chain_id || '',
    });
  }
}

export default ChainId;
