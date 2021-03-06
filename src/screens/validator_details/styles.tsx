import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .validator-voting-power': {
      },
      '& .potential': {
      },
      '& .missed-blocks': {
        height: '550px',
        zIndex: 30,
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
          height: '100%',
        },

        '& .validator-info': {
          gridColumn: '3 / 8',
        },

        '& .validator-voting-power': {
          gridColumn: '1 / 5',
        },

        '& .potential': {
          height: '100%',
          gridColumn: '5 / 8',
          gridRow: '2 / span 1',
        },

        '& .missed-blocks': {
          gridColumn: '1 / 3',
          height: '650px',
        },
        '& .staking': {
          gridColumn: '3 / 8',
          height: '650px',
        },
        '& .events-and-activities': {
          gridColumn: '1 / 8',
        },
      },
    },
    validatorProfile: {
      borderRadius: '4px',
      background: theme?.palette?.background?.paper,
      padding: theme?.palette?.custom?.margins?.small,
      color: theme?.palette?.custom?.fonts?.fontOneToTwo,
      '& .content__link': {
        '& a': {
          color: theme?.palette?.custom?.fonts?.fontFive,
        },
      },
      '& svg': {
        fontSize: '1.375rem',
        color: theme?.palette?.custom?.fonts?.fontThree,
      },
      '& .keybase__display': {
        '& svg': {
          color: '#15CF74',
        },
      },
      '& .avatarDisplay': {
        '& div': {
          color: theme?.palette?.custom?.fonts?.fontOne,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        padding: theme?.palette?.custom?.margins?.large,
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
