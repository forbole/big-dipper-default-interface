/**
 * Helper function to help generate ellpsis in the middle of text
*/
export const formatMiddleEllipse = (str:string, {
  maxLength = 15,
  beginning = 8,
  ending = 3,
}) => {
  if (str.length > maxLength) {
    // eslint-disable-next-line
    return str.substr(0, beginning) + '...' + str.substr(str.length-ending, str.length);
  }
  return str;
};
