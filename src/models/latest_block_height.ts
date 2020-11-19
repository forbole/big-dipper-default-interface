class LatestBlockHeight {
  public height: number;

  constructor(payload: any) {
    this.height = payload.height;
  }

  static fromJson(data: any) {
    return new LatestBlockHeight({
      height: data.height ?? 0,
    });
  }
}

export default LatestBlockHeight;
