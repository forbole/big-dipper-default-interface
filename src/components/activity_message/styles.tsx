import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      padding: theme?.palette?.custom?.margins?.small,
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        gridTemplateColumns: '160px auto',
        gridTemplateRows: 'auto',
        '& .body': {
          gridColumn: '2/3',
          gridRow: '1/2',
        },
        '& .type-tag__container': {
          gridColumn: '1/2',
          gridRow: '1/2',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
