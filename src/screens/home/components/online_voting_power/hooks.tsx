import {
  useState, useEffect,
} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { WindowSizeProps } from './types';

export const useOnlineVotingPowerHook = (windowSize: WindowSizeProps) => {
  const [gridAspect, setGridAspect] = useState(undefined);
  const theme:any = useTheme();

  useEffect(() => {
    if (windowSize.width >= theme?.breakpoints?.values?.desktop) {
      setGridAspect(undefined);
    } else if (windowSize.width >= theme?.breakpoints?.values?.tablet) {
      setGridAspect(3);
    } else {
      setGridAspect(undefined);
    }
  }, [windowSize.width]);

  return {
    gridAspect,
  };
};
