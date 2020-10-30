import { queryExample } from './query_example';

// consensus
import {
  AVERAGE_BLOCK_LAST_DAY,
  BLOCK_INFO_LIMIT,
  AVERAGE_BLOCK_LAST_HOUR,
  AVERAGE_BLOCK_LAST_MINUTE,
  AVERAGE_BLOCK_TIME_FROM_GENESIS,
  LATEST_BLOCK_HEIGHT,
  CONSENSUS_STATE,
} from './consensus';

// staking
import {
  VALIDATOR_DISCRIPTION,
  VALIDATOR_INFO,
  POTENTIAL,
  VOTING_POWER,
  VALIDATOR_LIST,
  UNDELEGATION, DELEGATION, REDELEGATION,
} from './staking';

// pricefeed
import {
  PRICE, MARKET_CAP,
} from './pricefeed';
import { INFLATION } from './mint';
import { COMMUNITY_POOL } from './distribution';

// gov
import {
  PROPOSALS_LIST,
  PROPOSAL, TALLY_STATE, NO_WITH_VETO_VOTE,
  ABSTAIN_VOTE, DEPOSITS, NO_VOTE, ALL_VOTE, YES_VOTE,
} from './gov';

export {
  queryExample,
  // consensus
  AVERAGE_BLOCK_LAST_DAY,
  BLOCK_INFO_LIMIT,
  AVERAGE_BLOCK_LAST_HOUR,
  AVERAGE_BLOCK_LAST_MINUTE,
  AVERAGE_BLOCK_TIME_FROM_GENESIS,
  LATEST_BLOCK_HEIGHT,
  CONSENSUS_STATE,

  // staking
  VALIDATOR_DISCRIPTION,
  VALIDATOR_INFO,
  POTENTIAL,
  VOTING_POWER,
  DELEGATION,
  REDELEGATION,
  UNDELEGATION,
  VALIDATOR_LIST,

  // pricefeed
  PRICE,
  MARKET_CAP,

  // distribution
  COMMUNITY_POOL,

  // mint
  INFLATION,

  // gov
  PROPOSALS_LIST,
  PROPOSAL,
  DEPOSITS,
  ALL_VOTE,
  YES_VOTE,
  NO_VOTE,
  ABSTAIN_VOTE,
  NO_WITH_VETO_VOTE,
  TALLY_STATE,
};
