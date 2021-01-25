import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { chainConfig } from '@src/chain_config';

class Stabilities {
  public bondedTokens: number;
  public unbondedTokens: number;
  public totalSupply: number;
  public communityPool: number;

  constructor(payload: any) {
    this.bondedTokens = payload.bondedTokens;
    this.unbondedTokens = payload.unbondedTokens;
    this.totalSupply = payload.totalSupply;
    this.communityPool = payload.communityPool;
  }

  static fromJson(data: any) {
    const totalSupply = R.pathOr([], ['total_tokens', 0, 'coins'], data).reduce((a, b) => {
      if (b.denom === chainConfig.base) {
        return b;
      }
      return a;
    }, null);

    const communityPool = R.pathOr([], ['community_pool', 0, 'coins'], data).reduce((a, b) => {
      if (b.denom === chainConfig.base) {
        return b;
      }
      return a;
    }, null);

    return new Stabilities({
      bondedTokens: R.pathOr(0, ['pool', 0, 'bonded_tokens'], data),
      unbondedTokens: R.pathOr(0, ['pool', 0, 'not_bonded_tokens'], data),
      totalSupply: totalSupply?.amount ?? 0,
      communityPool: communityPool?.amount ?? 0,
    });
  }
}

export default Stabilities;
