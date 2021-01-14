import * as R from 'ramda';
// import { chainConfig } from '@src/chain_config';

class ConsensusPool {
  public bondedTokens: number;
  // public votingPower: number;
  // public height: number;
  // public step: number;
  // public round: number;

  // public unbondedTokens: number;
  // public totalSupply: number;
  // public communityPool: number;

  constructor(payload: any) {
    this.bondedTokens = payload.bondedTokens;
    // this.votingPower = payload.votingPower;
    // this.height = payload.height;
    // this.step = payload.step;
    // this.round = payload.round;
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

    return new ConsensusPool({
      bondedTokens: R.pathOr(0, ['pool', 0, 'bonded_tokens'], data),
      // votingPower: data.votingPower,
      // height: data.height ?? 0,
      // step: data.step ?? 0,
      // round: data.round ?? 0,
      // unbondedTokens: R.pathOr(0, ['pool', 0, 'not_bonded_tokens'], data),
      // totalSupply: totalSupply?.amount ?? 0,
      // communityPool: communityPool?.amount ?? 0,
    });
  }
}

export default ConsensusPool;
