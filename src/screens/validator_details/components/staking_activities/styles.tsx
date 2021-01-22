import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      background: theme?.palette?.background?.paper,
      padding: theme?.palette?.custom?.margins?.small,
      height: '100%',
      '& .MuiTab-wrapper': {
        fontSize: '1rem',
      },
      '& .staking__data-container': {
        '& .validator-staking-mobile': {
          background: theme?.palette?.background?.paper,
          '& .staking': {
            borderBottom: `1px solid ${theme?.palette?.divider}`,
          },
          '& .MuiTablePagination-root': {
            background: theme?.palette?.background?.paper,
          },
          '& .MuiIconButton-root, & .pagination-actions__page': {
            background: theme?.palette?.custom?.table?.rowOdd,
            color: theme.palette.custom.fonts.fontThree,
          },
          '& .MuiTablePagination-caption, & .validator-staking__amount--overflow, & .staking__redelegate': {
            color: theme.palette.custom.fonts.fontTwo,
          },
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        padding: theme?.palette?.custom?.margins?.large,
        '& .MuiTab-wrapper': {
          fontSize: '1.125rem',
        },
        '& .MuiTableHead-root, & .MuiTablePagination-toolbar': {
          background: theme?.palette?.background?.paper,
        },
        '& .validator-staking': {
          '& .single-row': {
            background: theme?.palette?.background?.paper,
            '&:nth-of-type(odd)': {
              background: theme?.palette?.custom?.table?.rowOdd,
            },
          },
        },
        '& .validator-staking-desktop': {
          '& .MuiTablePagination-caption, & .label, & .cell': {
            color: theme.palette.custom.fonts.fontTwo,
          },
          '& .MuiIconButton-root, & .pagination-actions__page': {
            background: theme?.palette?.custom?.table?.rowOdd,
            color: theme.palette.custom.fonts.fontThree,
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
