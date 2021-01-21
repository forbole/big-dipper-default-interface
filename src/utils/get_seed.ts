/**
 * Seed generator for jazzicon
 * @param address
 */
export const getSeed = (address:string) => {
  return address?.split('')?.reduce((a, b) => {
    return a + b.charCodeAt(0);
  }, 0) ?? 0;
};
