import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .validator-voting-power': {
        height: '500px',
        background: 'lime',
        border: 'solid 1px black',
      },
      '& .potential': {
        height: '400px',
        background: 'skyblue',
        border: 'solid 1px black',
      },
      '& .missed-blocks': {
        height: '550px',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        gridTemplateColumns: 'repeat(7, 1fr)',
        '& .mobile-tablet-header': {
          display: 'none',
        },

        '& .validator-bio': {
          gridColumn: '1 / 3',
          gridRow: '1 / span 2',
          height: '100%',
        },

        '& .validator-info': {
          gridColumn: '3 / 8',
        },

        '& .validator-voting-power': {
          gridColumn: '3 / 6',
        },

        '& .potential': {
          height: '100%',
          gridColumn: '6 / 8',
          gridRow: '2 / span 1',
        },

        '& .missed-blocks': {
          gridColumn: '1 / 3',
          height: '600px',
        },
        '& .staking': {
          gridColumn: '3 / 8',
          height: '600px',
        },
        '& .events-and-activities': {
          gridColumn: '1 / 8',
        },
      },
    },
    validatorProfile: {
      background: theme?.palette?.background?.paper,
      padding: theme?.palette?.custom?.margins?.small,
      color: theme?.palette?.custom?.fonts?.fontOneToTwo,
      '& svg': {
        fontSize: '1.375rem',
        color: theme?.palette?.custom?.fonts?.fontThree,
      },
      '& .keybase__display': {
        '& svg': {
          color: '#15CF74',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
