import { gql } from '@apollo/client';

export const LATEST_ACTIVITIES = gql`
query Activities ($limit: Int, $offset: Int){
  transaction(limit: $limit, offset: $offset, order_by: {height: desc}) {
    timestamp
    hash
    height
    messages
    success
  }
}
`;
