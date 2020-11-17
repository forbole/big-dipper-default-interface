export class CommunityPool {
  public amount: number;
  public denom: string;

  constructor(payload: any) {
    this.amount = payload.amount;
    this.denom = payload.denom;
  }

  static fromJson(json: any) {
    return new CommunityPool({
      amount: json.amount,
      denom: json.denom,
    });
  }
}
