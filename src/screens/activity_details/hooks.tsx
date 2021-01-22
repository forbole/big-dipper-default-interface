import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  useQuery, gql,
} from '@apollo/client';
import { ACTIVITY_DETAILS } from '@graphql/queries';
import { activityDetailParser } from '@src/graphql/parsers/queries';
import { ActivityDetail } from '@models';
import { formatActivityDetailsData } from './utils';

export const useActivityDetailsHook = () => {
  const router = useRouter();
  const [detail, setDetail] = useState<ActivityDetail>(ActivityDetail.fromJson({
  }));

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${ACTIVITY_DETAILS}`, {
    variables: {
      hash: router?.query?.activity ?? null,
    },
    onCompleted: (data) => {
      const parsedData = activityDetailParser(data);
      if (parsedData) {
        setDetail(parsedData);
      } else {
        router.push('/404');
      }
    },
  });

  return {
    detail: formatActivityDetailsData(detail),
  };
};
