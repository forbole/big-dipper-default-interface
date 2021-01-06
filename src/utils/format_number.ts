/* eslint-disable */

/**
 * Helper function to handle toFixed without rounding
 */
const toFixedNoRound = (num, fixed) => {
  var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return num.toString().match(re)[0];
}

/**
 * Help function to formats numbers into a legible manner [DEPRECATED]
 * @param num the value
 * @param decimal if true whole values decimal values will be return. If a number it will fixed and round. Defaults to 0
 */
export const formatNumber = (num: number | string, decimal: number | true = 0) => {
  if (!num && num !== 0) {
    return '';
  }

  // Keep the whole decimal value and format the full numbers only
  if (typeof decimal === 'boolean' && decimal === true) {
    let stringNum = num.toString();
    const [full, decimal] = stringNum.split('.');
    const formatFull = full.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return `${formatFull}${decimal ? '.': ''}${decimal ?? ''}`
  }
  // Else round to the closest decimal and format whole numbers
  if (typeof num === 'string') {
    num = parseInt(num);
  }

  num = num.toFixed(decimal as number ?? 0);
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};


/**
 * Helper function that returns display and value based on given params
 * @param num
 * @param options
 */
export const convertNumber = (num: number | string, options?: {
  decimal?: number,
  suffix?: string,
}) => {
  const { decimal = 0 } = options ?? {};
  let { suffix = '' } = options ?? {}
  const results = {
    value: null,
    display: null,
  };

  if (!num && num !== 0) {
    return results;
  }

  if (typeof num === 'string') {
    num = parseInt(num);
  }
  results.value = num;
  num = toFixedNoRound(num, decimal);

  if (suffix) {
    suffix = ` ${suffix}`
  }

  // Handle decimal edge case
  if (decimal) {
    let stringNum = num.toString();
    const [full, decimal] = stringNum.split('.');
    const formatFull = full.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    results.display = `${formatFull}${decimal ? '.': ''}${decimal ?? ''}${suffix}`
  } else {
    results.display = `${num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}${suffix}`;
  }

  return results;
}

// nFormatter(299792458, 1) = 299.8M

/**
 * Helper function to turn 1234 => 1.2K
 * @param num
 * @param digits
 */
export const nFormatter = (num, digits) => {

  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return toFixedNoRound((num / si[i].value), digits).replace(rx, "$1") + si[i].symbol;
}
