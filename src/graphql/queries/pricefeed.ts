import { gql } from '@apollo/client';

export const PRICE = gql`
  subscription price{
    token_price(limit: 1, order_by: {timestamp: desc}) {
    price
    market_cap
    denom
    }
}`;

export const MARKET_CAP = gql`
  subscription market{
    token_price(limit: 1, order_by: {timestamp: desc}) {
    market_cap
    denom
  }
}`;

export const INFLATION = gql`
 subscription inflat{
   inflation(limit: 1, order_by: {height: desc}) {
    value
  }  
}`;

export const COMMUNITY_POOL = gql`
 subscription community_pool{
   community_pool(limit: 1, order_by: {height: desc}) {
    coins
  }
 }
`;