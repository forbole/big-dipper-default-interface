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
    // pollInterval: generalConfig.pollInterval.minute,
    // notifyOnNetworkStatusChange: true,
    // variables: {
    //   limit: 10,
    //   offset: 0,
    // },
    onCompleted: (data) => {
      setOnlineVotingPower(onlineVotingPowerParser(data));
    },
  });

  const getCartesianGridStroke = () => {
    return theme?.palette?.divider;
  };

  return {
    getCartesianGridStroke,
    onlineVotingPower,
  };
};
