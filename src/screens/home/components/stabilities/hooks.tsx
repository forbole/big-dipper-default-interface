import * as R from 'ramda';
import { useQuery } from '@apollo/client';
import { STABILITIES } from '@graphql/queries';
import { generalConfig } from '@src/general_config';
import { Stabilities } from '@models';

export const useStabilitiesHook = () => {
  const stabilities = useQuery(STABILITIES, {
    pollInterval: generalConfig.pollInterval,
  });

  const formattedData = Stabilities.fromJson(R.pathOr({
  }, ['data'], stabilities));

  return {
    stabilities: formattedData,
  };
};
