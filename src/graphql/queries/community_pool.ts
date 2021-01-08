import { gql } from '@apollo/client';

export const COMMUNITY_POOL = gql`
  query CommunityPool {
    community_pool(limit: 1, order_by: {height: desc}) {
      coins
    }
  }
`;
