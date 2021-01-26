import { VALIDATOR_PROFILE } from '@graphql/queries';
import { gql } from '@apollo/client';

export const VALIDATOR_PROFILE_MOCK_DATA = [
  {
    request: {
      query: gql`${VALIDATOR_PROFILE}`,
      variables: {
        address: null,
      },
    },
    result: {
      data: {
        validator: [
          {
            validator_descriptions: [{
              moniker: 'blockscape',
              details: null,
              identity: null,
              website: null,
            }],
            validator_status: {
              status: 2,
              jailed: false,
            },
            validator_info: {
              operator_address: 'desmosvaloper1dqcs9cgw2mv696je4579w7ulexyges73rneysl',
            },
          },
        ],
      },
    },
  },
];
