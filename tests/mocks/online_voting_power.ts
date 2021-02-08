import { ONLINE_VOTING_POWER } from '@graphql/subscriptions';
import { gql } from '@apollo/client';

export const ONLINE_VOTING_POWER_MOCK_DATA = [
  {
    request: {
      query: gql`${ONLINE_VOTING_POWER}`,
    },
    result: {
      data: {
        block: [
          {
            height: 231767,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
              },
            },
          },
          {
            height: 231765,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
              },
            },
          },
          {
            height: 231762,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
              },
            },
          },
          {
            height: 231760,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
              },
            },
          },
          {
            height: 231758,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
              },
            },
          },
          {
            height: 231756,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
              },
            },
          },
          {
            height: 231754,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
              },
            },
          },
          {
            height: 231752,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
              },
            },
          },
          {
            height: 231751,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: 279631,
                },
              },
            },
          },
          {
            height: 231749,
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
              },
            },
          },
        ],
      },
    },
  },
];
