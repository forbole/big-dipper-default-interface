import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    mobile: {
      '&.table-preview-wrapper': {
        background: theme?.palette?.background?.paper,
      },
      '& .top-bar': {
        '& h3': {
          color: theme?.palette?.custom?.fonts?.fontOne,
        },
      },
      '& .content': {
        '& .single-block': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
          borderColor: theme?.palette?.divider,
          '&:first-child': {
            borderColor: theme?.palette?.divider,
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
        '&.table-preview-wrapper': {
          background: theme?.palette?.background?.paper,
          height: '100%',
          '& .top-bar': {
            '& h3': {
              color: theme?.palette?.custom?.fonts?.fontOne,
              fontSize: '1.5rem',
            },
          },
          '& .content': {
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
    },
  }));

  return {
    classes: useStyles(),
  };
};
