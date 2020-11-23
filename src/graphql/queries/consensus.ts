import { gql } from '@apollo/client';

/**
 * Get the consensus state
 */
export const CONSENSUS_STATE = gql`
  subscription consensus_state{
    consensus{
      height
      round
      step
    }
  }
`;
