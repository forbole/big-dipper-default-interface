class BigDipperNetworkLink {
  public chainId: string;
  public url: string;
  public name: string;

  constructor(payload: any) {
    this.chainId = payload.chainId;
    this.url = payload.url;
    this.name = payload.name;
  }

  static fromJson(data: any) {
    return new BigDipperNetworkLink({
      chainId: data.chain_id,
      url: data.url,
      name: data.name,
    });
  }
}

export default BigDipperNetworkLink;
