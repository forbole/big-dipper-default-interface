/* eslint-disable */

/**
 * Help function to formats numbers into a legible manner
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
