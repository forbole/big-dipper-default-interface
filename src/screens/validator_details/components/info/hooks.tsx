import copy from 'copy-to-clipboard';

export const useInfoHook = () => {
  const handleCopy = (value:string) => {
    copy(value);
  };

  return {
    handleCopy,
  };
};
