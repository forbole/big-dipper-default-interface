/**
 * Helper util to quickly adjust the opacity of a rgba color
 * @param color Color must be in rgba format ex: `rgba(30, 196, 144, 0.7)`
 * @param opacity The opacity you want to set it to ex: `0.5
 */
export const rgbaOpacityConverter = (color:string, opacity: number | number) => {
  const rgbaFormatChecker = RegExp(/^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/gm);
  if (rgbaFormatChecker.test(color)) {
    return color.replace(/[^,]+(?=\))/, ` ${opacity}`);
  }
  return color;
};
