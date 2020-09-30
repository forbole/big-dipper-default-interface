import { gql } from '@apollo/client';

export const PROPOSALS_LIST = gql`
query proposal {
  proposal(order_by: {proposal_id: desc}) {
    description
    proposal_id
    proposal_type
    proposer
    status
    submit_time
    title
    voting_end_time
    voting_start_time
  }
}`;

export const PROPOSAL = gql`
query proposal($id: numeric!) {
   proposal(where: {proposal_id: {_eq: $id}}) {
    description
    proposal_id
    proposal_type
    proposer
    status
    submit_time
    title
    voting_end_time
    voting_start_time
  }
}`;

export const DEPOSITS = gql`
query MyQuery($id: Int!) {
  deposit(where: {proposal_id: {_eq: $id}}) {
    amount
    depositor
    timestamp
    total_deposit
  }
}
`;

export const ALL_VOTE = gql`
query AllVote($id: Int!) {
  vote(where: {proposal_id: {_eq: $id}}) {
    height
    option
    proposal_id
    timestamp
    voter
  }
}
`;

export const YES_VOTE = gql`
  query Vote($id: Int!) {
  vote(where: {proposal_id: {_eq: $id}, option: {_eq: "Yes"}}) {
    height
    option
    proposal_id
    timestamp
    voter
  }
}
`;

export const NO_VOTE = gql`
  query Vote($id: Int!) {
  vote(where: {proposal_id: {_eq: $id}, option: {_eq: "No"}}) {
    height
    option
    proposal_id
    timestamp
    voter
  }
}
`;

export const ABSTAIN_VOTE = gql`
  query Vote($id: Int!) {
  vote(where: {proposal_id: {_eq: $id}, option: {_eq: "Abstain"}}) {
    height
    option
    proposal_id
    timestamp
    voter
  }
}
`;
export const NO_WITH_VETO_VOTE = gql`
  query Vote($id: Int!) {
  vote(where: {proposal_id: {_eq: $id}, option: {_eq: "NoWithVeto"}}) {
    height
    option
    proposal_id
    timestamp
    voter
  }
}
`;