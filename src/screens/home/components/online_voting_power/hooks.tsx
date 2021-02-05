import { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  useQuery, gql,
} from '@apollo/client';
import { OnlineVotingPower } from '@models';
import { ONLINE_VOTING_POWER } from '@graphql/queries';
import { onlineVotingPowerParser } from '@graphql/parsers/queries';

export const useOnlineVotingPowerHook = () => {
  const [onlineVotingPower, setOnlineVotingPower] = useState<OnlineVotingPower[]>([]);
  const theme:any = useTheme();

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${ONLINE_VOTING_POWER}`, {
    onCompleted: (data) => {
      setOnlineVotingPower(onlineVotingPowerParser(data));
    },
  });

  return {
    onlineVotingPower,
    cartesianGridStroke: theme?.palette?.divider,
  };
};
