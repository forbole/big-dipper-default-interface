import {
  TOTAL_ACTIVE_VALIDATORS,
  AVERAGE_BLOCK_TIMES,
  LATEST_VALIDATOR_STATUS_HEIGHT,
} from '@graphql/queries';
import { LATEST_BLOCK_HEIGHT } from '@graphql/subscriptions';
import { gql } from '@apollo/client';

export const DATA_BLOCKS_HEADER_MOCK = [
  {
    request: {
      query: gql`${LATEST_BLOCK_HEIGHT}`,
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
      query: gql`${AVERAGE_BLOCK_TIMES}`,
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
      query: gql`${TOTAL_ACTIVE_VALIDATORS}`,
      variables: {
        height: 103385,
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
  {
    request: {
      query: gql`${LATEST_VALIDATOR_STATUS_HEIGHT}`,
      variables: {
      },
    },
    result: {
      data: {
        validator_status: [
          {
            height: 103385,
          },
        ],
      },
    },
  },
];
