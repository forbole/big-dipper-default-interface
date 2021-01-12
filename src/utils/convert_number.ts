import numeral from 'numeral';

/**
 * Helper function that returns display and value based on given params
 * @param num
 * @param options
 */
export const convertNumber = (num: number | string, options?: {
  prefix?: string,
  suffix?: string,
  format?: string;
}) => {
  const {
    format = null,
    prefix = '',
  } = options ?? {
  };
  let { suffix = '' } = options ?? {
  };
  const results = {
    value: null,
    display: null,
  };

  if (!num && num !== 0) {
    return results;
  }
  results.value = num;

  if (suffix) {
    suffix = ` ${suffix}`;
  }

  results.display = `${prefix}${numeral(num).format(format)}${suffix}`;

  return results;
};
