import {
  TOTAL_VALIDATORS_COUNT,
  AVERAGE_BLOCK_TIMES,
} from '@graphql/queries';
import { LATEST_BLOCK_HEIGHT } from '@graphql/subscriptions';

export const DATA_BLOCKS_HEADER_MOCK = [
  {
    request: {
      query: LATEST_BLOCK_HEIGHT,
      variables: {
      },
    },
    result: {
      data: {
        latest_height: [
          {
            height: 45432,
            timestamp: '2020-10-09T00:19:18.344921',
          },
        ],
      },
    },
  },
  {
    request: {
      query: AVERAGE_BLOCK_TIMES,
      variables: {
      },
    },
    result: {
      data: {
        average_block_time_from_genesis: [
          {
            average_time: 5.254878641689097,
          },
        ],
        average_block_time_per_minute: [
          {
            average_time: 6.089975375774506,
          },
        ],
        average_block_time_per_hour: [
          {
            average_time: 6.089980411925651,
          },
        ],
        average_block_time_per_day: [
          {
            average_time: 6.088279834088469,
          },
        ],
      },
    },
  },
  {
    request: {
      query: TOTAL_VALIDATORS_COUNT,
      variables: {
      },
    },
    result: {
      data: {
        active_validators: {
          aggregate: {
            count: 81,
          },
        },
        not_active_validators: {
          aggregate: {
            count: 0,
          },
        },
      },
    },
  },
];
