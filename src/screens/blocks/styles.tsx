import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .data-blocks': {
        display: 'none',
      },
      '& .blocks-content': {
        background: theme?.palette?.background?.paper,
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        '& .data-blocks': {
          display: 'block',
        },
        '& .mobile-tablet-header': {
          display: 'none',
        },
      },
    },
    mobile: {
      padding: '0 1rem',
      '& .latest-blocks-mobile': {
        '& .single-block': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
          borderColor: theme?.palette?.divider,
          '&:first-child': {
            borderTop: 'none',
          },
          '&:last-child': {
            borderBottom: 'none',
          },
          '& .time': {
            color: theme?.palette?.custom?.fonts?.fontThree,
          },
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'none',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
