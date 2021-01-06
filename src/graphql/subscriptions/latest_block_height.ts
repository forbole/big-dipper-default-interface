import { gql } from '@apollo/client';

export const LATEST_BLOCK_HEIGHT = gql`
  subscription LatestHeight {
    latest_height: block(order_by: {height: desc}, limit: 1) {
      height
      timestamp
    }
  }
`;
