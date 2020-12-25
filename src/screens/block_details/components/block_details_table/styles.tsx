import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.big-dipper': {
        background: theme?.palette?.background?.paper,
        '& .cell': {
          color: theme?.palette?.custom?.fonts.fontOne,
        },
        '& .table': {
          '& tr': {
            borderBottomColor: theme?.palette?.divider,
            '&:last-child': {
              borderBottom: 'none',
            },
          },
        },
      },
      '& .dialog': {
        background: theme?.palette?.background?.paper,
      },
      '& .dialogTitle': {
        color: theme?.palette?.custom?.fonts.fontOne,
      },
      '& .MuiTableCell-stickyHeader': {
        backgroundColor: theme?.palette?.custom?.table?.rowOdd,
      },
      '& .MuiTableCell-body, & .MuiTableCell-head, & .MuiTableSortLabel-root.MuiTableSortLabel-active': {
        color: theme?.palette?.custom?.fonts.fontTwo,
      },
      '& .tableRow': {
        '&:nth-of-type(even)': {
          background: theme?.palette?.custom?.table?.rowOdd,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
      },
    },
  }));
  return {
    classes: useStyles(),
  };
};
