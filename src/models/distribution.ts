export class CommunityPool {
  public coin: number;
  constructor(payload: any) {
    this.coin = payload.coin;
  }
  static fromJson(json: any) {
    return new CommunityPool({
      coin: json.coin,
    });
  }
}
