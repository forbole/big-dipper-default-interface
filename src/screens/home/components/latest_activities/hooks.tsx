import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  useQuery, gql,
} from '@apollo/client';
import { LATEST_ACTIVITIES } from '@graphql/queries';
import { generalConfig } from '@src/general_config';
import { latestActivitiesParser } from '@graphql/parsers/queries';

export const useLatestActivitiesHook = () => {
  const [latestActivitiesdata, setLatestActivitiesData] = useState([]);
  const router = useRouter();

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${LATEST_ACTIVITIES}`, {
    pollInterval: generalConfig.pollInterval.minute,
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 10,
      offset: 0,
    },
    onCompleted: (data) => {
      setLatestActivitiesData(latestActivitiesParser(data));
    },
  });

  // ===============================
  // others
  // ===============================
  const handleClick = (hash:string | number) => {
    if (hash) {
      router.push(`/activities/${hash}`);
    }
  };

  return {
    handleClick,
    latestActivities: latestActivitiesdata,
  };
};
