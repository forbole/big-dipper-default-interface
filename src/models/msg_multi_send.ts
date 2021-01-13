type Coins = {
  denom: string;
  amount: number | string;
}

class MsgMultiSend {
  public type: string;
  public inputs: {
    address: string;
    coins: Coins[],
  }[];
  public outputs: {
    address: string;
    coins: Coins[],
  }[];

  constructor(payload: any) {
    this.type = payload.type;
    this.inputs = payload.inputs;
    this.outputs = payload.outputs;
  }

  static fromJson(json: any) {
    return new MsgMultiSend({
      type: json['@type'],
      inputs: json.inputs?.map((input) => {
        return ({
          address: input?.address,
          coins: input?.coins?.map((coin) => {
            return ({
              denom: coin?.denom,
              amount: Number.isNaN(Number(coin?.amount)) ? coin?.amount : Number(coin?.amount),
            });
          }),
        });
      }),
      outputs: json.inputs?.map((input) => {
        return ({
          address: input?.address,
          coins: input?.coins?.map((coin) => {
            return ({
              denom: coin?.denom,
              amount: Number.isNaN(Number(coin?.amount)) ? coin?.amount : Number(coin?.amount),
            });
          }),
        });
      }),
    });
  }
}

export default MsgMultiSend;
