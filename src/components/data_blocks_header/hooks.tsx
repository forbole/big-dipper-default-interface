export const useDataBlocksHeaderHook = () => {
  const handleBlockTimeDurationClick = (value:string) => {
    console.log(value, 'block time value');
  };

  return {
    handleBlockTimeDurationClick,
  };
};
