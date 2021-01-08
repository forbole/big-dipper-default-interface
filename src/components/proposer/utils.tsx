/**
 * Proposer Util functions that do not affect the state
 */
export const proposerUtils = () => {
  const handleClick = (e:any) => {
    e.stopPropagation();
  };

  return {
    handleClick,
  };
};
