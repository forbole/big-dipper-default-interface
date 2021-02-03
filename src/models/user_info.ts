import * as R from 'ramda';
import { chainConfig } from '@src/chain_config';

class UserInfo {
  public address: string;
  public rewardAddress: string;
  public price: number;
  public available: number;
  public delegate: number;
  public redelegate: number;
  public unbonding: number;
  public reward: number;
  public commission: number;

  constructor(payload: any) {
    this.address = payload.address;
    this.rewardAddress = payload.rewardAddress;
    this.price = payload.price;
    this.available = payload.available;
    this.delegate = payload.delegate;
    this.redelegate = payload.redelegate;
    this.unbonding = payload.unbonding;
    this.reward = payload.reward;
    this.commission = payload.commission;
  }

  static fromJson(data: any) {
    // ==========================
    // base
    // ==========================
    const account = R.pathOr({
    }, ['account', 0], data);

    // ==========================
    // available
    // ==========================
    const available = R.pathOr(0, [0, 'amount'],
      R.pathOr([], ['available', 0, 'coins'], account).filter((x) => x.denom === chainConfig.base));

    // ==========================
    // delegate
    // ==========================
    const delegate = R.pathOr([], ['delegations'], account).filter((x) => x?.amount?.denom === chainConfig.base).reduce((a, b) => {
      return a + b?.amount?.amount;
    }, 0);

    // ==========================
    // redelegate
    // ==========================
    const redelegate = R.pathOr([], ['redelegations'], account).filter((x) => x?.amount?.denom === chainConfig.base).reduce((a, b) => {
      return a + b?.amount?.amount;
    }, 0);

    // ==========================
    // unbonding
    // ==========================
    const unbonding = R.pathOr([], ['unbonding'], account).filter((x) => x?.amount?.denom === chainConfig.base).reduce((a, b) => {
      return a + b?.amount?.amount;
    }, 0);

    // ==========================
    // rewards
    // ==========================
    const reward = R.pathOr([], ['rewards'], account).filter((x) => x?.amount?.denom === chainConfig.base).reduce((a, b) => {
      return a + b?.amount?.amount;
    }, 0);

    // ==========================
    // commissions
    // ==========================
    const commission = R.pathOr(0, [0, 'amount'],
      R.pathOr([], ['validator', 0, 'commissions', 0, 'amount'], data)
        .filter((x) => x?.denom === chainConfig.base));

    return new UserInfo({
      address: R.pathOr(0, ['account', 0, 'address'], data),
      rewardAddress: R.pathOr(0, ['account', 0, 'address'], data), // update later
      available,
      delegate,
      redelegate,
      unbonding,
      reward,
      commission,
      price: 0,
      // price: R.pathOr(0, ['token_price', 0, 'price'], data),
    });
  }
}

export default UserInfo;
