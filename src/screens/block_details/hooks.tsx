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
  BlockDetail, LatestActivity,
} from '@models';
import {
  blockDetailsParser, latestActivitiesParser,
} from '@src/graphql/parsers/queries';

export const useBlockDetailsHook = (t:any) => {
  const router = useRouter();
  const [state, setState] = useState<{
    blockDetails: BlockDetail,
    blockActivities: LatestActivity[],
    notFound: boolean,
  }>({
    notFound: false,
    blockDetails: BlockDetail.fromJson({
    }),
    blockActivities: [],
  });

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${BLOCK_DETAILS}`, {
    variables: {
      height: router?.query?.block,
    },
    onCompleted: (data) => {
      console.log(data, 'my data');
      const parsedBlockData = blockDetailsParser(data);
      const parsedActivitiesData = latestActivitiesParser(data);
      if (!parsedBlockData) {
        router.push('/404');
      } else {
        handleSetState({
          blockDetails: parsedBlockData,
          blockActivities: parsedActivitiesData,
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
    title: `${t('subTitle')} ${numeral(router?.query?.block).format('0,0')}`,
    state,
  };
};
