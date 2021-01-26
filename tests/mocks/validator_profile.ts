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
            validator_descriptions: [
              {
                moniker: 'liray-unendlich',
                details: null,
                identity: null,
                website: null,
              },
            ],
            validator_statuses: [
              {
                status: 1,
                jailed: true,
                height: 87215,
              },
            ],
            validator_info: {
              operator_address: 'desmosvaloper1qpm8wutycha3ncd0u3w9g42v89xnnfs6hgcudl',
            },
          },
        ],
      },

    },
  },
];
