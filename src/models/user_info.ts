import * as R from 'ramda';

export type dataType = {
  denom?: string,
  amount?: number,
}

class UserInfo {
  public address: number;
  public rewardAddress: number;
  public totalAmount: number;
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
    this.totalAmount = payload.totalAmount;
    this.unit = payload.unit;
    this.avaliable = payload.avaliable;
    this.delegate = payload.delegate;
    this.redelegate = payload.redelegate;
    this.unbonding = payload.unbonding;
    this.reward = payload.reward;
    this.commission = payload.commission;
  }

  static fromJson(data: any) {
    console.log('model', data);

    return new UserInfo({
      address: R.pathOr(0, ['pool', 0, 'address'], data),
      totalAmount: R.pathOr(0, ['pool', 0, 'account_balances', 0, 'coins', 0, 'amount'], data),
      unit: R.pathOr('', ['pool', 0, 'account_balances', 0, 'coins', 0, 'denom'], data),
      delegate: R.pathOr({
        denom: '', amount: 0,
      }, ['pool', 0, 'delegations', 0, 'amount'], data),
      redelegate: R.pathOr({
        denom: '', amount: 0,
      }, ['pool', 0, 'redelegations', 0, 'amount'], data),
      unbonding: R.pathOr({
        denom: '', amount: 0,
      }, ['pool', 0, 'unbonding_delegations', 0, 'amount'], data),

      /* data not ready */
      rewardAddress: R.pathOr(0, ['pool', 0, 'rewardAddress'], data),
      avaliable: R.pathOr({
        denom: '', amount: 0,
      }, ['pool', 0, 'unbonding_delegations', 0, 'amount'], data),
      reward: R.pathOr({
        denom: '', amount: 0,
      }, ['pool', 0, 'unbonding_delegations', 0, 'amount'], data),
      commission: R.pathOr({
        denom: '', amount: 0,
      }, ['pool', 0, 'unbonding_delegations', 0, 'amount'], data),
    });
  }
}

export default UserInfo;
