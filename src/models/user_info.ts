import * as R from 'ramda';
// import { chainConfig } from '@src/chain_config';

class UserInfo {
  public address: number;
  public rewardAddress: number;
  // public bondedTokens: number;
  // public unbondedTokens: number;
  // public totalSupply: number;
  // public communityPool: number;

  constructor(payload: any) {
    this.address = payload.address;
    this.rewardAddress = payload.rewardAddress;
    // this.bondedTokens = payload.bondedTokens;
    // this.unbondedTokens = payload.unbondedTokens;
    // this.totalSupply = payload.totalSupply;
    // this.communityPool = payload.communityPool;
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
      address: R.pathOr(0, ['validator_info', 0, 'account', 0, 'address'], data),
      // rewardAddress: R.pathOr(0, ['pool', 0, 'not_bonded_tokens'], data),
      // totalSupply: totalSupply?.amount ?? 0,
      // communityPool: communityPool?.amount ?? 0,
    });
  }
}

export default UserInfo;
