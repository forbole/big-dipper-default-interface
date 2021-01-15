export const handleClick = (e:any) => {
  e.stopPropagation();
};

export const getSeed = (address:string) => {
  return address?.split('')?.reduce((a, b) => {
    return a + b.charCodeAt(0);
  }, 0);
};
