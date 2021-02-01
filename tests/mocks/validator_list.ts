import { VALIDATOR_LIST } from '@graphql/queries';
import { gql } from '@apollo/client';

export const VALIDATOR_LIST_MOCK_DATA = [
  {
    request: {
      query: gql`${VALIDATOR_LIST}`,
    },
    result: {
      data: {
        pool: [
          {
            bonded_tokens: 153441285236,
          },
        ],
        validator: [
          {
            validator_info: {
              operator_address: 'desmosvaloper1qpm8wutycha3ncd0u3w9g42v89xnnfs6hgcudl',
            },
            validator_descriptions: [
              {
                moniker: 'liray-unendlich',
                identity: null,
              },
            ],
            validator_voting_powers: [],
            validator_commissions: [
              {
                commission: 0.3,
              },
            ],
            validator_statuses: [
              {
                height: 171637,
                jailed: true,
                status: 1,
              },
            ],
            validator_signing_infos: [
              {
                missed_blocks_counter: 2,
              },
            ],
            self_delegations: [],
          },
        ],
        slashing_params: [
          {
            signed_block_window: 720,
          },
        ],
      },
    },
  },
];
