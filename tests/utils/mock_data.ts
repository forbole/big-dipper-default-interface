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
            average_time: 4.49,
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

export const STABILITIES_MOCK = [
  {
    title: 'Stabilities',
    coin: 'ATOM',
    price: {
      title: 'Price',
      display: '$2.756',
    },
    inflation: {
      title: 'Inflation',
      display: '7.01%',
    },
    marketCap: {
      title: 'Market Cap',
      display: '$515,551',
    },
    communityPool: {
      title: 'Community Pool',
      display: '370,000',
    },
    data: {
      total: {
        value: 191235.473,
        display: '0.19 m',
      },
      detail:
        [{
          title: 'Bonded', value: 100000, display: '10,000',
        },
        {
          title: 'Unbonded', value: 91235.473, display: '91,235.4',
        },
        ],
    },
    colors: ['#FF7846', '#FFD800'],
  },
];
