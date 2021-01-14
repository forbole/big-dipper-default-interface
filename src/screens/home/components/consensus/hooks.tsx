import { useState } from 'react';
import {
  useQuery,
  useSubscription,
  gql,
} from '@apollo/client';
import { CONSENSUS_POOL } from '@graphql/queries';
import {
  CONSENSUS,
  PROPOSER,
} from '@graphql/subscriptions';
import { generalConfig } from '@src/general_config';
import { consensusPoolParser } from '@src/graphql/parsers/queries';
import {
  ConsensusParser,
  ProposerParser,
} from '@src/graphql/parsers/subscriptions';
import {
  Consensus,
  ConsensusPool,
  Proposer,
} from '@models';

export const useConsensusPoolHook = () => {
  const [consensusPool, setConsensusPool] = useState<ConsensusPool>(ConsensusPool.fromJson({
  }));

  useQuery(gql`${CONSENSUS_POOL}`, {
    pollInterval: generalConfig.pollInterval.default,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setConsensusPool(consensusPoolParser(data));
      // console.log('dataPool', data);
    },
  });

  return {
    consensusPool,
  };
};

export const useConsensusHook = () => {
  const [consensus, setConsensus] = useState<Consensus>(Consensus.fromJson({
  }));

  useSubscription(gql`${CONSENSUS}`, {
    onSubscriptionData: (data) => {
      setConsensus(ConsensusParser(data));
    },
  });

  return {
    consensus,
  };
};

export const useProposerHook = () => {
  const [proposer, setProposer] = useState<Proposer>(Proposer.fromJson({
  }));

  useSubscription(gql`${PROPOSER}`, {
    onSubscriptionData: (data) => {
      setProposer(ProposerParser(data));
    },
  });

  return {
    proposer,
  };
};
