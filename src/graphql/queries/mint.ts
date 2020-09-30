import { gql } from '@apollo/client';


export const INFLATION = gql`
 subscription inflat{
   inflation(limit: 1, order_by: {height: desc}) {
    value
  }  
}`;