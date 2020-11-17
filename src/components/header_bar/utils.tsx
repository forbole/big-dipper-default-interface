import { CommunityPool } from '@models';
import { chainConfig } from '@src/chain_config';

/**
 * Helper Function to converts Denom to display depending on the exponent given
 * @param denom The denom you wish to convert to
 * @param value The value in base denom value
 */
export const formatDenom = (denom: string, value: number) => {
  // export const defaultConverter = (ratio: number) => (num: number) => {
  //   return num / ratio;
  // };
  // export const uAtomToAtom = defaultConverter(1000000);
  const results = {
    raw: value,
    format: value,
  };
  const [selectedDenom] = chainConfig.denomUnits.filter((x) => x.denom === denom);
  if (!selectedDenom) {
    return results;
  }
  const ratio = 10 ** selectedDenom.exponent;
  results.raw = value / ratio;
  results.format = results.raw;
  // find the denom in config
  // convert the exponent
  // covert
  // format

  return results;
};

/**
 * Helper function to get the base pool
 * @param data
 */
export const getBasePool = (base:string, data: CommunityPool[]) => {
  const [filterData] = data.filter((x) => x.denom === base);
  return filterData;
};
