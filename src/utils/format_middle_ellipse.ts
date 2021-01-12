/**
 * Helper function to help generate ellpsis in the middle of text
*/
export const formatMiddleEllipse = (str:string, options?: {
  beginning?: number,
  ending?: number,
}) => {
  const oneThird = Math.floor(str.length / 3);
  const {
    beginning = oneThird,
    ending = oneThird,
  } = options ?? {
  };

  if (str.length > 2) {
    return `${str.substr(0, beginning)}...${str.substr(str.length - ending, str.length)}`;
  }
  return str;
};
