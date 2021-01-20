import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .header__timestamp': {
        display: 'none',
      },
      '&.activities-list': {
        color: theme.palette.custom.fonts.fontTwo,
        '& .single-transaction__header': {
          padding: '0.5rem',
          background: theme?.palette?.custom?.table?.rowOdd,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        '& .header__timestamp': {
          display: 'block',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '&.activities-list': {
          '& .single-transaction__wrapper': {
            '& .single-transaction__header': {
              padding: '0.5rem 1rem',
            },
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
