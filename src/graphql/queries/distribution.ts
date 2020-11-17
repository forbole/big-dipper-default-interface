import { gql } from '@apollo/client';

const COMMUNITY_POOL_SUBSCRIPTION = gql`
 subscription community_pool {
   community_pool(limit: 1, order_by: {height: desc}) {
    coins
  }
}`;

const COMMUNITY_POOL_QUERY = gql`
query community_pool {
  community_pool(limit: 1, order_by: {height: desc}) {
   coins
 }
}`;

export {
  COMMUNITY_POOL_QUERY,
  COMMUNITY_POOL_SUBSCRIPTION,
};
