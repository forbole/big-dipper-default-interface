class MsgFundCommunityPool {
  public type: string;
  public depositor: string;
  public amount: {
    denom: string;
    amount: string | number;
  }[]

  constructor(payload: any) {
    this.type = payload.type;
    this.depositor = payload.depositor;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgFundCommunityPool({
      type: json['@type'],
      depositor: json.depositor,
      amount: json?.amount.map((x) => {
        return ({
          denom: x?.denom,
          amount: Number.isNaN(Number(x?.amount)) ? x?.amount : Number(x?.amount),
        });
      }),
    });
  }
}

export default MsgFundCommunityPool;
