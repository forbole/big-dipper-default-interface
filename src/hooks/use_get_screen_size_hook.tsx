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
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
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
    const width = windowSize?.width ?? 0;
    // is mobile
    if (width < theme?.breakpoints?.values?.tablet) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    // is tablet
    if (width >= theme?.breakpoints?.values?.tablet
      && width < theme?.breakpoints?.values?.desktop) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }

    // is desktop
    if (width >= theme?.breakpoints?.values?.desktop) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [windowSize.width]);

  return {
    windowSize,
    isDesktop,
    isTablet,
    isMobile,
  };
}

export {
  useGetScreenSizeHook,
};
