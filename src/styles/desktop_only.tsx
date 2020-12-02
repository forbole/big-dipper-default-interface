import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

/**
 * Hides component in mobile and tablet
 */
export const useDesktopOnlyStyles = (display = 'block') => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'none',
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display,
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
