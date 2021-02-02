import React from 'react';
import { AvatarDisplay } from '@forbole/big-dipper-default-ui';
import { useTheme } from '@material-ui/core/styles';

const Proposer = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

const Title = () => {
  const theme:any = useTheme();
  return (
    <a
      href="/validators/123"
      style={{
        color: theme?.palette?.custom?.fonts?.fontOne, textDecoration: 'none',
      }}
    >
      Lunie.io on iOS and Android
    </a>
  );
};

export const dummyProposalList: any = [
  {
    id: 1,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:20 UTC',
    status: {
      current: true,
      display: 'Vote',
    },
    duration: '(In 12 days)',
  },
  {
    id: 2,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:21 UTC',
    status: {
      current: false,
      display: 'Passed',
    },
  },
  {
    id: 3,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:22 UTC',
    status: {
      current: true,
      display: 'Deposit',
    },
    duration: '(In 12 days)',
  },
  {
    id: 4,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:23 UTC',
    status: {
      current: false,
      display: 'Rejected',
    },
  },
  {
    id: 5,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:24 UTC',
    status: {
      current: false,
      display: 'Removed',
    },
  },
  {
    id: 6,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:25 UTC',
    status: {
      current: true,
      display: 'Vote',
    },
    duration: '(In 12 days)',
  },
  {
    id: 7,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:26 UTC',
    status: {
      current: true,
      display: 'Vote',
    },
    duration: '(In 12 days)',
  },
  {
    id: 8,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:27 UTC',
    status: {
      current: false,
      display: 'Passed',
    },
  },
  {
    id: 9,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:28 UTC',
    status: {
      current: true,
      display: 'Deposit',
    },
    duration: '(In 12 days)',
  },
  {
    id: 10,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:29 UTC',
    status: {
      current: false,
      display: 'Rejected',
    },
  },
  {
    id: 11,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:30 UTC',
    status: {
      current: false,
      display: 'Removed',
    },
  },
  {
    id: 12,
    proposer: <Proposer />,
    title: <Title />,
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:31 UTC',
    status: {
      current: true,
      display: 'Vote',
    },
    duration: '(In 12 days)',
  },
];
