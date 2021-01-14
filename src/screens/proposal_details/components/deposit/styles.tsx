import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      borderRadius: '6px',
      background: theme?.palette?.background?.paper,
      '&.big-dipper': {
        '& h1': {
          color: theme?.palette?.custom?.fonts?.fontOne,
        },
        '& .cell': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
        },
        '& .tableRow': {
          '&:nth-of-type(odd)': {
            background: theme?.palette?.type === 'light' ? '#F8F8F8' : '#19191D',
          },
        },
      },
      '&.proposalDepositMobile': {
        padding: theme?.palette?.custom?.margins?.small,
      },
      '&.proposalDepositDesktop': {
        display: 'none',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        '&.proposalDepositDesktop': {
          padding: theme?.palette?.custom?.margins?.large,
          display: 'block',
          '& .label': {
            color: theme?.palette?.custom?.fonts?.fontOneToTwo,
          },
        },
        '&.proposalDepositMobile': {
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
