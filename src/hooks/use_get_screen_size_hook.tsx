import {
  useState, useEffect,
} from 'react';
import { useTheme } from '@material-ui/core/styles';

function useGetScreenSizeHook() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);
  const [isDesktop, setIsDesktop] = useState(false);
  const theme:any = useTheme();

  useEffect((): any => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if ((windowSize?.width ?? 0) >= theme?.breakpoints?.values?.desktop && !isDesktop) {
      setIsDesktop(true);
    }
    if ((windowSize?.width ?? 0) < theme?.breakpoints?.values?.desktop && isDesktop) {
      setIsDesktop(false);
    }
  }, [windowSize.width]);

  return {
    windowSize,
    isDesktop,
  };
}

export {
  useGetScreenSizeHook,
};
