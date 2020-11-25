export const useLatestBlocksHook = () => {
  const handleClick = (data:any) => {
    console.log(data.hash, 'hash baby');
  };

  return {
    handleClick,
  };
};
