import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { useRouter } from 'next/router';
import {
  useQuery,
  gql,
} from '@apollo/client';
import { BLOCK_DETAILS } from '@graphql/queries';
import {
  BlockDetail,
  Stabilities,
  PreCommit,
} from '@models';
import {
  blockDetailsParser,
  stabilitiesParser,
  preCommitsParser,
} from '@src/graphql/parsers/queries';
import {
  formatPreCommitData, getVotingPowerSum,
} from './utils';
import { PreCommitsProps } from './types';

export const useBlockDetailsTableHook = (t:any): {
  votingPowerSum: string;
  block: BlockDetail;
  precommits: PreCommitsProps[];
  loading: boolean;
} => {
  const router = useRouter();
  const [state, setState] = useState<{
    block: BlockDetail;
    pool: Stabilities;
    precommits: PreCommit[];
    loading: boolean;
  }>({
    block: BlockDetail.fromJson({
    }),
    pool: Stabilities.fromJson({
    }),
    precommits: [],
    loading: true,
  });

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${BLOCK_DETAILS}`, {
    variables: {
      height: router?.query?.block ? numeral(router?.query?.block).value() : null,
    },
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: (data) => {
      const parsedBlockData = blockDetailsParser(data);
      const parsedPoolData = stabilitiesParser(data);
      const parsedPreCommitsData = preCommitsParser(data);
      if (!parsedBlockData) {
        router.push('/404');
      } else {
        handleSetState({
          block: parsedBlockData,
          pool: parsedPoolData,
          loading: false,
          precommits: parsedPreCommitsData,
        });
      }
    },
  });

  // ===============================
  // utils
  // ===============================
  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  return {
    loading: state.loading,
    votingPowerSum: numeral(getVotingPowerSum(state.precommits, state.pool)).format('0.00[0000]%'),
    block: state.block,
    precommits: formatPreCommitData(state.precommits, state.pool, t),
  };
};
