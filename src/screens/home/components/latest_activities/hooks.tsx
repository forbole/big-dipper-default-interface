import { useState } from 'react';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useQuery } from '@apollo/client';
import { LATEST_ACTIVITIES } from '@graphql/queries';
import { LatestBlock } from '@models';
import { generalConfig } from '@src/general_config';

export const useLatestActivitiesHook = () => {
  const [latestActivitiesdata, setLatestActivitiesdata] = useState([]);
  const router = useRouter();

  // ===============================
  // get data
  // ===============================
  useQuery(LATEST_ACTIVITIES, {
    pollInterval: generalConfig.pollInterval.minute,
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 10,
      offset: 0,
    },
    onCompleted: (data) => {
      const formattedData = R.pathOr([], ['blocks'], data)?.map((block) => LatestBlock.fromJson(block));
      setLatestActivitiesdata(formattedData);
    },
  });

  // ===============================
  // others
  // ===============================
  const handleClick = (data:any) => {
    if (data?.hash) {
      router.push(`/activities/${data.hash}`);
    }
  };

  return {
    handleClick,
    latestActivities: latestActivitiesdata,
  };
};
