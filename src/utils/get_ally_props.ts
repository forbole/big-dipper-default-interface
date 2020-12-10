/** Helper for material ui tabs */
export const getAllyProps = (index:number | string) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
};
