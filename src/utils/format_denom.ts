import { formatNumber } from '@utils';
import { chainConfig } from '@src/chain_config';

/**
 * Helper Function to converts Denom to display depending on the exponent given
 * @param denom The denom you wish to convert to
 * @param value The value in base denom value
 */
export const formatDenom = (denom: string, value: number) => {
  const results = {
    raw: value,
    format: '-',
    denom,
  };

  const [selectedDenom] = chainConfig.denomUnits.filter((x) => x.denom === denom);
  if (!selectedDenom) {
    return results;
  }
  const ratio = 10 ** selectedDenom.exponent;
  results.raw = value / ratio;
  results.format = formatNumber(results.raw, true);

  return results;
};
