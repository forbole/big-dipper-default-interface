import { gql } from '@apollo/client';

export const queryExample = gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }`;
