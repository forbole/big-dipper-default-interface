import {
  useState, useEffect,
} from 'react';
import { useTheme } from '@material-ui/core/styles';

export const useOnlineVotingPowerHook = (windowSize: { width: number, height: number}) => {
  const [gridAspect, setGridAspect] = useState(undefined);
  const theme:any = useTheme();

  useEffect(() => {
    if (windowSize.width >= theme?.breakpoints?.values?.desktop) {
      setGridAspect(1.5);
    } else if (windowSize.width >= theme?.breakpoints?.values?.tablet) {
      setGridAspect(3);
    } else {
      setGridAspect(undefined);
    }
  }, [windowSize.width]);

  const getCartesianGridStroke = () => {
    return theme?.palette?.divider;
  };

  return {
    gridAspect,
    getCartesianGridStroke,
  };
};
