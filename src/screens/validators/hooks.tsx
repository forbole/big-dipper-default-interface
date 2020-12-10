import {
  useState, useEffect,
} from 'react';
import { handleSearchbarSubmit } from '@utils';
import { useTheme } from '@material-ui/core/styles';

export const useValidatorHook = () => {
  return {
    handleSearchbarSubmit,
  };
};

export const useValidatorListHook = (windowSize:any) => {
  const [tabValue, setTabValue] = useState(0);
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

  const handleTabChange = (_event:any, newValue: number) => {
    setTabValue(newValue);
  };

  return {
    tabValue,
    handleTabChange,
    isDesktop,
  };
};
