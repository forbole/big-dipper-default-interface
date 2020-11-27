import { CommunityPool } from '@models';

/**
 * Helper function to get the base community pool
 * @param data
 */
export const getBaseCommunityPool = (base:string, data: CommunityPool[]) => {
  const [filterData] = data.filter((x) => x.denom === base);
  return filterData;
};
