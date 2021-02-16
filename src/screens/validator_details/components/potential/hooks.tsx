// import { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
// import {
//   gql, useSubscription,
// } from '@apollo/client';
// import { OnlineVotingPower } from '@models';
// import { ONLINE_VOTING_POWER } from '@graphql/subscriptions';
// import { onlineVotingPowerParser } from '@graphql/parsers/subscriptions';

export const usePotentialHook = () => {
  // const [votingPower, setVotingPower] = useState<OnlineVotingPower[]>([]);
  const theme:any = useTheme();

  // ===============================
  // get data
  // ===============================
  // useSubscription(gql`${ONLINE_VOTING_POWER}`, {
  //   onSubscriptionData: (data) => {
  //     setVotingPower(onlineVotingPowerParser(data));
  //   },
  // });

  return {

    gridStroke: theme?.palette?.divider,
  };
};
