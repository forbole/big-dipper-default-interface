import { ACTIVITY_DETAILS } from '@graphql/queries';
import { gql } from '@apollo/client';

export const ACTIVITY_DETAILS_MOCK_DATA = [
  {
    request: {
      query: gql`${ACTIVITY_DETAILS}`,
      variables: {
        hash: null,
      },
    },
    result: {
      data: {
        transaction: [
          {
            hash: '90448290BA200674649128E37FE2E35FDA38B5882A3B3B4EA610B2D3F6933EE0',
            height: 103348,
            fee: {
              payer: '',
              amount: [
                {
                  denom: 'udaric',
                  amount: '5000',
                },
              ],
              granter: '',
              gas_limit: '200000',
            },
            gas_used: 69277,
            gas_wanted: 200000,
            success: true,
            memo: '',
            messages: [
              {
                '@type': '/cosmos.bank.v1beta1.MsgSend',
                amount: [
                  {
                    denom: 'udaric',
                    amount: '1000000',
                  },
                ],
                to_address: 'desmos1w35tkwvmd3q3zp0erdjvsw9e0avvulwqhe6gmu',
                from_address: 'desmos14dm0zdemeymhayucp7gchuus3k5m344f3v8nln',
              },
            ],
            block: {
              timestamp: '2021-01-27T09:11:56.523297',
            },
          },
        ],
      },
    },
  },
];
