import * as R from 'ramda';
// import { chainConfig } from '@src/chain_config';

class UserInfo {
  public address: number;
  public rewardAddress: number;

  constructor(payload: any) {
    this.address = payload.address;
    this.rewardAddress = payload.rewardAddress;
  }

  static fromJson(data: any) {
    // const totalSupply = R.pathOr([], ['total_tokens', 0, 'coins'], data).reduce((a, b) => {
    //   if (b.denom === chainConfig.base) {
    //     return b;
    //   }
    //   return a;
    // }, null);

    // const communityPool = R.pathOr([], ['community_pool', 0, 'coins'], data).reduce((a, b) => {
    //   if (b.denom === chainConfig.base) {
    //     return b;
    //   }
    //   return a;
    // }, null);
    console.log('model', data);

    return new UserInfo({
      address: R.pathOr(0, ['account', 0, 'address'], data),
    });
  }
}

export default UserInfo;
