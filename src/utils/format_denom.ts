import numeral from 'numeral';
import { chainConfig } from '@src/chain_config';

/**
 * Helper Function to converts Denom to display depending on the exponent given
 * @param denom The denom you wish to convert to
 * @param value The value in base denom value
 */
export const formatDenom = (denom: string, value: number, format = '0,0.00') => {
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

  if (typeof value === 'string') {
    value = numeral(value).value() as number;
  }

  results.raw = value / ratio;
  results.format = numeral(value / ratio).format(format);

  return results;
};
