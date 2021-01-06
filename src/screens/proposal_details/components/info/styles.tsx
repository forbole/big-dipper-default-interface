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
        // '& h1': {
        //   color: theme?.palette?.custom?.fonts?.fontOne,
        // },

        '& .tableRow': {
          '&:nth-of-type(odd)': {
            background: theme?.palette?.type === 'light' ? '#F8F8F8' : '#19191D',
          },
        },
      },
      '&.proposalInfoMobile': {
        padding: theme?.palette?.custom?.margins?.small,
        paddingTop: '0',
      },
      '&.proposalInfoDesktop': {
        display: 'none',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        '&.proposalInfoDesktop': {
          background: theme?.palette?.background?.paper,
          padding: theme?.palette?.custom?.margins?.large,
          display: 'block',
          '& .title': {
            color: theme?.palette?.custom?.fonts?.fontOne,
          },
          '& .cell, & .label, & .time': {
            color: theme?.palette?.custom?.fonts?.fontTwo,
          },
          '& .table': {
            borderBottomColor: theme?.palette?.divider,
          },
          '& .days': {
            color: theme?.palette?.type === 'light' ? '#FD7522' : '#FD7522B3',
          },
          '& .button': {
            color: theme?.palette?.type === 'light' ? '#FFFFFF' : theme?.palette?.custom?.fonts?.fontOne,
          },
        },
        '&.proposalInfoMobile': {
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
