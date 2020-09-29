import { gql } from '@apollo/client';

export const LATEST_BLOCK_HEIGHT = gql`
      subscription LatestBlockHeight {
  block(limit: 1, order_by: {height: desc}) {
    height
  }
}`;