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
            hash: 'FA6236379AB6698125AAB780557F125D4DF07014A2524287C71A2B2EC170054E',
            height: 512287,
            fee: {
              gas: '200000',
              amount: [],
            },
            gas_used: 36682,
            gas_wanted: 200000,
            success: false,
            memo: '',
            messages: [
              {
                type: 'cosmos-sdk/MsgUnjail',
                value: {
                  address: 'desmosvaloper1f20swevd5veqywv9h6rcxqzs8xxll6pkyp430t',
                },
              },
            ],
            timestamp: '2020-11-09T15:03:54',
          },
        ],
      },
    },
  },
];
