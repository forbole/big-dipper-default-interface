import { gql } from '@apollo/client';

export const COMMUNITY_POOL = gql`
 subscription community_pool{
   community_pool(limit: 1, order_by: {height: desc}) {
    coins
  }
}`;
