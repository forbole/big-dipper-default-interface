/**
 * Helper function to help generate ellpsis in the middle of text
*/
export const formatMiddleEllipse = (str:string, options?: {
  beginning?: number,
  ending?: number,
}) => {
  const oneThird = Math.floor(str.length / 4);
  const {
    beginning = oneThird + oneThird,
    ending = oneThird,
  } = options ?? {
  };

  if (beginning + ending && beginning + ending < str.length) {
    return `${str.substr(0, beginning)}...${str.substr(str.length - ending, str.length)}`;
  }

  return str;
};
