import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

/**
 * Hides component in desktop
 */
export const useMobileOnlyStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'none',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
