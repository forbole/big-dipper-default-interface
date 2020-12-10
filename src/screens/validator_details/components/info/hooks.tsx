import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

export const useInfoHook = (t:any) => {
  const handleCopy = (value:string) => {
    copy(value);
    toast(`${t('common:copied')}!`);
  };

  return {
    handleCopy,
  };
};
