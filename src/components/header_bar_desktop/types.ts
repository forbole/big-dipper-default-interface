import { CommunityPool } from '@models';

export interface HeaderBarDesktopProps {
  title: string;
  communityPool: {
    loading?: any;
    error?: any;
    data: CommunityPool[];
  }
}
