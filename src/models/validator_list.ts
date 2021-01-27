import * as R from 'ramda';
// import { chainConfig } from '@src/chain_config';

class ValidatorList {
  // public bondedTokens: number;
  // public unbondedTokens: number;
  // public totalSupply: number;
  // public communityPool: number;

  public moniker: number;
  public identity: number;

  constructor(payload: any) {
    // this.bondedTokens = payload.bondedTokens;
    // this.unbondedTokens = payload.unbondedTokens;
    // this.totalSupply = payload.totalSupply;
    // this.communityPool = payload.communityPool;
    this.moniker = payload.moniker;
    this.identity = payload.identity;
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

    return new ValidatorList({
      // bondedTokens: R.pathOr(0, ['pool', 0, 'bonded_tokens'], data),
      // unbondedTokens: R.pathOr(0, ['pool', 0, 'not_bonded_tokens'], data),
      // totalSupply: totalSupply?.amount ?? 0,
      // communityPool: communityPool?.amount ?? 0,
      moniker: R.pathOr(0, ['descriptions', 0, 'moniker'], data),
      identity: R.pathOr(0, ['descriptions', 0, 'identity'], data),
    });
  }
}

export default ValidatorList;
