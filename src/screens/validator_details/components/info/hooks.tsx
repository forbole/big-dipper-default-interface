import {
  useState, useEffect,
} from 'react';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { useTheme } from '@material-ui/core/styles';

export const useInfoHook = (t:any, windowSize) => {
  const [isDesktop, setDesktop] = useState(false);
  const theme:any = useTheme();

  useEffect(() => {
    if (windowSize.width >= theme?.breakpoints?.values?.desktop && !isDesktop) {
      setDesktop(true);
    }
    if (windowSize.width < theme?.breakpoints?.values?.desktop && isDesktop) {
      setDesktop(false);
    }
  }, [windowSize.width]);

  const handleCopy = (value:string) => {
    copy(value);
    toast(`${t('common:copied')}!`);
  };

  return {
    handleCopy,
    isDesktop,
  };
};
