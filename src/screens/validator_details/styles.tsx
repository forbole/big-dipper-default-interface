import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .validator-bio': {
        height: '500px',
        background: 'pink',
        border: 'solid 1px black',
      },
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
      '& .staking': {
        height: '400px',
        background: '#de5dc0',
        border: 'solid 1px black',
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
        },
        '& .staking': {
          gridColumn: '3 / 8',
        },
        '& .events-and-activities': {
          gridColumn: '1 / 8',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
