export const getMinMediaQuery = (breakpoint: string | number) => {
  return `@media (min-width: ${breakpoint}px)`;
};

export const getMaxMediaQuery = (breakpoint: string | number) => {
  return `@media (max-width: ${breakpoint}px)`;
};
