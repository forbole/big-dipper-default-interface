import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .mobile-tablet-header': {
        height: '100px',
        background: 'pink',
        border: 'solid 1px black',
      },
      '& .validator-bio': {
        height: '500px',
        background: 'pink',
        border: 'solid 1px black',
      },
      '& .validator-info': {
        height: '500px',
        background: 'yellow',
        border: 'solid 1px black',
      },
      '& .validator-voting-power': {
        height: '500px',
        background: 'lime',
        border: 'solid 1px black',
      },
      '& .missed-blocks': {
        height: '400px',
        background: 'orange',
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
      '& .events-and-activities': {
        height: '400px',
        background: '#dbc5fa',
        border: 'solid 1px black',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))',
        '& .mobile-tablet-header': {
          display: 'none',
        },

        '& .validator-bio': {
          gridColumn: '1 / 2',
          gridRow: '1 / span 2',
          height: '100%',
        },

        '& .validator-info': {
          gridColumn: '2 / 4',
        },

        '& .potential': {
          height: '100%',
          gridColumn: '3 / 4',
          gridRow: '2 / span 1',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
