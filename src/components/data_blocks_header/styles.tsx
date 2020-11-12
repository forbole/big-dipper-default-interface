import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridAutoRows: '1fr',
      gridGap: theme?.palette?.custom?.gutters?.small,
      '& .data-block': {
        color: theme?.palette?.type === 'light' ? 'white' : theme?.palette?.custom?.fonts?.fontOne,
        '& .value': {
          fontSize: '1.2rem',
        },
        '& .duration': {
          display: 'none',
          textAlign: 'right',
        },
        '&.latest-block-height': {
          background: theme?.palette?.custom?.dashboardData?.dashOne,
        },
        '&.average-block-time': {
          background: theme?.palette?.custom?.dashboardData?.dashTwo,
        },
        '&.price': {
          background: theme?.palette?.custom?.dashboardData?.dashThree,
        },
        '&.active-validators': {
          background: theme?.palette?.custom?.dashboardData?.dashFour,
        },
        '& .MuiSelect-select.MuiSelect-select': {
          width: '0',
          opacity: '0',
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
          '& .value': {
            fontSize: '2rem',
          },
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
          '& .value': {
            fontSize: '2.2rem',
          },
          '& .duration': {
            display: 'block',
          },
          '& .MuiSelect-select.MuiSelect-select': {
            width: '100%',
            opacity: '1',
          },
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: theme?.palette?.custom?.gutters?.medium,
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
