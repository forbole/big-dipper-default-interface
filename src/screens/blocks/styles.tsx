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
        padding: `0 ${theme?.palette?.custom?.margins?.small}`,
      },
      '& .blocks-content__header--desktop': {
        display: 'none',
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
        '& .blocks-content': {
          padding: theme?.palette?.custom?.margins?.large,
          borderRadius: '6px',
        },
        '& .blocks-content__header--desktop': {
          display: 'block',
          margin: '0 0 1rem',
          fontWeight: 500,
          fontSize: '1.5rem',
          color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        },
        '& .mobile-tablet-header': {
          display: 'none',
        },
      },
    },
    mobile: {
      '&.latest-blocks-mobile': {
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
    desktop: {
      display: 'none',
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'block',
        '&.latest-blocks-desktop': {
          '& .MuiTableCell-head': {
            color: theme?.palette?.custom?.fonts?.fontTwo,
          },
          '& .table': {
            background: theme?.palette?.background?.paper,
          },
          '& .single-row': {
            '&:hover': {
              cursor: 'pointer',
            },
            '&:nth-of-type(odd)': {
              background: theme?.palette?.custom?.table?.rowOdd,
            },
            '& .cell': {
              color: theme?.palette?.custom?.fonts?.fontTwo,
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
