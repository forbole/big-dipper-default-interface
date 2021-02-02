import * as R from 'ramda';

export type dataType = {
  denom?: string,
  amount?: bigint,
}

class UserInfo {
  public address: string;
  public rewardAddress: string;
  public price: bigint;
  public unit: string;
  public avaliable: dataType;
  public delegate: dataType;
  public redelegate: dataType;
  public unbonding: dataType;
  public reward: dataType;
  public commission: dataType;

  constructor(payload: any) {
    this.address = payload.address;
    this.rewardAddress = payload.rewardAddress;
    this.price = payload.price;
    this.unit = payload.unit;
    this.avaliable = payload.avaliable;
    this.delegate = payload.delegate;
    this.redelegate = payload.redelegate;
    this.unbonding = payload.unbonding;
    this.reward = payload.reward;
    this.commission = payload.commission;
  }

  static fromJson(data: any) {
    return new UserInfo({
      address: R.pathOr(0, ['account', 0, 'address'], data),
      avaliable: R.pathOr({
        denom: '', amount: 0,
      }, ['account', 0, 'available', 0, 'coins', 0], data),
      delegate: R.pathOr({
        denom: '', amount: 0,
      }, ['account', 0, 'delegations', 0, 'amount'], data),
      redelegate: R.pathOr({
        denom: '', amount: 0,
      }, ['account', 0, 'redelegations', 0, 'amount'], data),
      unbonding: R.pathOr({
        denom: '', amount: 0,
      }, ['account', 0, 'unbonding_delegations', 0, 'amount'], data),
      reward: R.pathOr({
        denom: '', amount: 0,
      }, ['account', 0, 'rewards', 0, 'amount'], data),
      price: R.pathOr(0.00, ['token_price', 0, 'price'], data),
      commission: R.pathOr({
        denom: '', amount: 0,
      }, ['account', 0, 'validator', 0, 'validator', 0, 'commissions', 0, 'amount'], data),
      rewardAddress: R.pathOr(0, ['account', 0, 'address'], data),

    });
  }
}

export default UserInfo;
