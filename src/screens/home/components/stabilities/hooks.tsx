import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { STABILITIES } from '@graphql/queries';
import { generalConfig } from '@src/general_config';
import { stabilitiesParser } from '@src/graphql/parsers/queries';
import { Stabilities } from '@models';

export const useStabilitiesHook = () => {
  const [stabilities, setStabilities] = useState<Stabilities>(Stabilities.fromJson({
  }));
  useQuery(STABILITIES, {
    pollInterval: generalConfig.pollInterval.default,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setStabilities(stabilitiesParser(data));
    },
  });

  return {
    stabilities,
  };
};
