import { CommunityPool } from '@models';

/**
 * Helper function to get the base pool
 * @param data
 */
export const getBasePool = (base:string, data: CommunityPool[]) => {
  const [filterData] = data.filter((x) => x.denom === base);
  return filterData;
};
