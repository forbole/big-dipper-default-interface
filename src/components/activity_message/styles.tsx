import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      padding: theme?.palette?.custom?.margins?.small,
      '& p': {
        margin: 0,
      },
      '& .link': {
        color: theme.palette.custom.fonts.fontFive,
        '&:hover': {
          cursor: 'pointer',
        },
      },
      '& .address': {
        wordBreak: 'break-all',
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
        padding: theme?.palette?.custom?.margins?.large,
        display: 'grid',
        gridTemplateColumns: 'minmax(150px, 200px) auto',
        gridTemplateRows: 'auto',
        gridGap: theme?.palette?.custom?.gutters?.large,
        '& .content__body': {
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
