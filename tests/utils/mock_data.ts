import {
  COMMUNITY_POOL_QUERY,
  AVERAGE_BLOCK_LAST_DAY_QUERY,
  LATEST_BLOCK_HEIGHT_QUERY,
} from '@graphql/queries';

export const LAYOUT_MOCK_DATA = {
  data: [],
};

export const HEADER_BAR_MOCK = [
  {
    request: {
      query: COMMUNITY_POOL_QUERY,
      variables: {
      },
    },
    result: {
      data: {
        community_pool: [
          {
            coins: [
              {
                amount: 300000,
                denom: 'udaric',
              },
            ],
          },
        ],
      },
    },
  },
];

export const DATA_BLOCKS_HEADER_MOCK = [
  {
    request: {
      query: LATEST_BLOCK_HEIGHT_QUERY,
      variables: {
      },
    },
    result: {
      data: {
        block: [
          {
            height: 44,
          },
        ],
      },
    },
  },
  {
    request: {
      query: AVERAGE_BLOCK_LAST_DAY_QUERY,
      variables: {
      },
    },
    result: {
      data: {
        average_block_time_per_day: [
          {
            average_time: 5.49,
          },
        ],
      },
    },
  },
  {
    request: {
      query: AVERAGE_BLOCK_LAST_DAY_QUERY,
      variables: {
      },
    },
    result: {
      data: {
        average_block_time_per_day: [
          {
            average_time: 5.49,
          },
        ],
      },
    },
  },
];
