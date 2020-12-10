import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {

      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '& .flex': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '& .hide': {
          visibility: 'hidden',
        },
        '& .show': {
          visibility: 'visible',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
