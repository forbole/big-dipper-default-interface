import { LATEST_ACTIVITY } from '@graphql/subscriptions';
import { gql } from '@apollo/client';

export const LATEST_ACTIVITY_MOCK_DATA = [
  {
    request: {
      query: gql`${LATEST_ACTIVITY}`,
      variables: {
      },
    },
    result: {
      data: {
        transaction: [
          {
            block: {
              timestamp: '2020-10-24T01:02:08',
            },
            hash: 'AF262C570A577A730D8BE900AABFAFC71F9E37F27182A4E6DB0C599E0FD003C6',
            height: 273251,
            messages: [
              {
                type: 'cosmos-sdk/MsgSend',
                value: {
                  amount: [
                    {
                      denom: 'udaric',
                      amount: '10000000',
                    },
                  ],
                  to_address: 'desmos1usxulamszd7myr0fa9g0klk3gv906tqglq8m8w',
                  from_address: 'desmos1dzn2s7l0wm9kekyazcnhapu8j95n90efmcmrad',
                },
              },
            ],
            success: true,
          },
        ],
      },
    },
  },
];
