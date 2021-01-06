import React from 'react';
// import { AvatarDisplay } from 'big-dipper-default-ui';
import { Proposer } from './components';

const Proposer1 = () => {
  return (
    <Proposer
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      id="1"
      display="Forbole"
    />
  );
};

export const dummyData: any = {
  id: '01',
  proposer: <Proposer1 />,
  title: 'Are Validators Charging 0% Commission Harmful to the Success of the Cosmos Hub?',
  description: 'Lunie Mobile now available in app stores near you! 📲 iOS - bit.ly 📲 Android - bit.ly ❣️This proposal was sent from the Lunie iOS app 😏Lunie Mobile now available in app stores near you! 📲 iOS - bit.ly 📲 Android - bit.ly ❣️This proposal was sent from the Lunie iOS app 😏Lunie Mobile now available in app stores near you! 📲 iOS - bit.ly 📲 Android - bit.ly ❣️This proposal was sent from the Lunie iOS app 😏Lunie Mobile now available in app stores near you! 📲 iOS - bit.ly 📲 Android - bit.ly ❣️This proposal was sent from the Lunie iOS app 😏',
  submittedTime: '12 Dec 2019, 16:22:11 UTC',
  depositEndTime: '26 Dec 2019, 16:22:11 UTC',
  votingStartTime: '26 Dec 2019, 16:22:11 UTC',
  votingEndTime: '10 Jan 2020, 16:22:11 UTC',
  status: {
    current: false,
    display: 'Passed',
  },
  // duration: '(In 12 days)',
  type: 'Text proposal',
  deposit: '520 ATOM',
};

export const Labels: any = {
  id: 'Proposal ID',
  proposer: 'Proposer',
  type: 'Type',
  title: 'Title',
  description: 'Description',
  deposit: 'Deposit',
  status: 'Status',
  submittedTime: 'Submitted Time',
  depositEndTime: 'Deposit End Time',
  votingStartTime: 'Voting Start Time',
  votingEndTime: 'Voting End Time',
};
