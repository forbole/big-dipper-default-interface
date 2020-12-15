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
        '& .single-validator-mobile': {
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
          '& .MuiTableSortLabel-root, & .MuiTableCell-root': {
            color: theme?.palette?.custom?.fonts?.fontOneToTwo,
          },
          '& .question-icon': {
            fill: theme?.palette?.custom?.fonts?.fontOneToTwo,
            fontSize: '1rem',
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
            '& .percentage-data': {
              color: theme.palette.custom.fonts.fontThree,
            },
          },
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        padding: theme?.palette?.custom?.margins?.small,
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
          minWidth: '400px',
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
