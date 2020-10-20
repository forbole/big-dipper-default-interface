export class Price {
  public price: number

  public marketCap: number

  public denom: string

  constructor(payload: any) {
    this.price = payload.price;
    this.marketCap = payload.marketCap;
    this.denom = payload.denom;
  }

  static fromJson(json: any) {
    return new Price({
      price: json.price,
      marketCap: json.market_cap,
      denom: json.denom,
    });
  }
}

export class MarketCap {
  public marketCap: number

  public denom: string

  constructor(payload: any) {
    this.marketCap = payload.marketCap;
    this.denom = payload.denom;
  }

  static fromJson(json: any) {
    return new MarketCap({
      marketCap: json.market_cap,
      denom: json.denom,
    });
  }
}
