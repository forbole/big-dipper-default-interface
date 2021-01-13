import { CommunityPool } from '@models';

export interface HeaderBarMobileProps {
  title: string;
  communityPool: {
    loading?: any;
    error?: any;
    data: CommunityPool[];
  }
}
