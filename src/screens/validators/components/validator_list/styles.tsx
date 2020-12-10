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
        '& .MuiInputBase-input': {
          padding: '0.5rem 1rem 0.5rem 0',
          fontSize: '0.875rem',
          color: theme?.palette?.custom?.fonts?.fontFour,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '& .MuiOutlinedInput-root': {
          background: theme?.palette?.background?.default,
        },
        '& .outline-input__icon': {
          fill: theme?.palette?.custom?.fonts?.fontFour,
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
