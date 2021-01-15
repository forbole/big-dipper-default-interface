import React from 'react';

export interface PreCommitsProps {
  validator: {
      rawValue: string;
      display: React.ReactNode;
  };
  votingPower: {
      rawValue: number;
      display: string;
  };
  votingPowerPercentage: {
      rawValue: number;
      display: string;
  };
  signStatus: {
      rawValue: number;
      display: string;
  };
}
