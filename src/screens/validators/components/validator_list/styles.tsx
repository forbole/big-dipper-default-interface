import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      padding: theme?.palette?.custom?.margins?.small,
      '& .MuiTab-wrapper': {
        fontSize: '1rem',
      },
      '& .validator-list__data-container': {
        '& .validator-list-mobile': {
          color: theme.palette.custom.fonts.fontTwo,
          borderBottom: `1px solid ${theme?.palette?.divider}`,
          '&:first-child': {
            borderTop: 'none',
          },
          '&:last-child': {
            borderBottom: 'none',
          },
        },

        '& .validator-list-desktop': {
          '& .MuiTableSortLabel-root': {
            color: theme?.palette?.custom?.fonts?.fontOneToTwo,
          },
          '& .table__row': {
            '&:nth-of-type(odd)': {
              background: theme?.palette?.custom?.table?.rowOdd,
              '& .rank': {
                background: theme?.palette?.background?.paper,
              },
            },
            '& .rank': {
              background: theme?.palette?.background?.default,
            },
          },
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        padding: theme?.palette?.custom?.margins?.large,
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
        '& .MuiTab-wrapper': {
          fontSize: '1.125rem',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
