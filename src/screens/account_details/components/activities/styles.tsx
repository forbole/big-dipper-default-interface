import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      padding: theme?.palette?.custom?.margins?.small,
      background: theme?.palette?.background?.paper,
      '& .header__container': {
        marginBottom: '1.5rem',
        '& h2': {
          fontSize: '1.375rem',
          fontWeight: 500,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        padding: theme?.palette?.custom?.margins?.large,
        '& .header__container': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& h2': {
            fontSize: '1.5rem',
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
