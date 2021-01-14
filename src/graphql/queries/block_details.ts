export const BLOCK_DETAILS = `
  query BlockDetail ($height: bigint){
    block(limit: 1, where: {height: {_eq: $height}}) {
      hash
      timestamp
      num_txs
      validator {
        validator_description {
          moniker
          identity
          validator_address
        }
      }
      height
      pre_commits
    }
  }
`;

// export const BLOCK_DETAIL = `
//   query BlockDetail ($height: bigint){
//     block(limit: 1, where: {height: {_eq: $height}}) {
//       hash
//       timestamp
//       num_txs
//       validator {
//         validator_description {
//           moniker
//           identity
// validator_address
//         }
//       }
//       pre_commits
//       validator_voting_power_histories_aggregate {
//         aggregate {
//           sum {
//             voting_power
//           }
//         }
//       }
//     }
//   }
// `;
