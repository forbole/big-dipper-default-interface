import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = (props) => {
  const useStyles = makeStyles((theme: any) => createStyles({
    table: {
    },
    root: {
      borderRadius: '6px',
      background: theme?.palette?.background?.paper,
      '&.big-dipper': {
        '& h1': {
          color: theme?.palette?.custom?.fonts?.fontOne,
        },
        '& .table__label': {
          color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        },
        '& .table__cell': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
        },
        '& .table__row': {
          '&:nth-of-type(odd)': {
            background: theme?.palette?.type === 'light' ? '#F8F8F8' : '#19191D',
          },
        },
        '& .yes': {
          color: theme?.palette?.type === 'light' ? '#1EC490' : '#1EC490B3',
        },
        '& .no': {
          color: theme?.palette?.type === 'light' ? '#FD248C' : '#FD248CB3',
        },
        '& .veto': {
          color: theme?.palette?.type === 'light' ? '#FD7522' : '#FD7522B3',
        },
        '& .abstain': {
          color: '#278CFF',
        },
        '& .absence': {
          color: theme?.palette?.type === 'light' ? '#FD3B4C' : '#FD3B4CB3',
        },
      },
      '&.proposalResultMobile': {
        padding: theme?.palette?.custom?.margins?.small,
        '& .dataType': {
          '&.yes': {
            '&:before': {
              background: props.chart.colors[0],
            },
          },
          '&.abstain': {
            '&:before': {
              background: props.chart.colors[3],
            },
          },
          '&.veto': {
            '&:before': {
              background: props.chart.colors[2],
            },
          },
          '&.no': {
            '&:before': {
              background: props.chart.colors[1],
            },
          },
        },
      },
      '&.proposalResultDesktop': {
        display: 'none',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        '&.proposalResultDesktop': {
          padding: theme?.palette?.custom?.margins?.large,
          display: 'block',
          '& p, & .amount': {
            color: theme?.palette?.custom?.fonts?.fontTwo,
          },
          '& .dataDisplay': {
            color: theme?.palette?.custom?.fonts?.fontOne,
          },
          '& .MuiTab-root': {
            color: theme?.palette?.custom?.fonts?.fontThree,
          },
          '& .tab': {
            '& .MuiTab-textColorPrimary.Mui-selected': {
              color: theme?.palette?.type === 'light' ? '#FD3B4C' : theme?.palette?.custom?.fonts?.fontOne,
            },
            '& .indicator': {
              backgroundColor: theme?.palette?.type === 'light' ? '#FD3B4C' : theme?.palette?.custom?.fonts?.fontOne,
            },
          },
          '& .MuiTablePagination-caption, & .label, & .cell': {
            color: theme.palette.custom.fonts.fontTwo,
          },
          '& .MuiIconButton-root, & .pagination-actions__page': {
            background: theme?.palette?.custom?.table?.rowOdd,
            color: theme.palette.custom.fonts.fontThree,
          },
        },
        '&.proposalResultMobile': {
          display: 'none',
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
