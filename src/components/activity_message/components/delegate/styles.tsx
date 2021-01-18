import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      wordBreak: 'break-all',
      margin: 0,
      '& .address': {
        color: theme.palette.custom.fonts.fontFive,
        '&:hover': {
          cursor: 'pointer',
        },
      },
      '& .amount': {
        fontWeight: 600,
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {

      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
