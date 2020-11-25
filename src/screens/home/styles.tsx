import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridTemplateRows: 'min-content min-content min-content',
      gridGap: theme?.palette?.custom?.gutters?.small,
      padding: theme?.palette?.custom?.gutters?.small,
      '& .data-blocks-container': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: theme?.palette?.custom?.gutters?.small,
      },
      '& .data-graphs': {
        background: 'pink',
      },
      '& .stablities': {
      },
      '& .consensus': {
        background: 'pink',
      },
      '& .latest-blocks': {

      },
      '& .latest-activites': {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        '& > *': {
          gridColumn: '1 / 3',
        },
        '& .stablities': {
          gridColumn: '1 / 2',
        },
        '& .consensus': {
          gridColumn: '2 / 3',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        gridTemplateColumns: 'repeat(4, 1fr)',
        '& > *': {
          gridColumn: '1 / 5',
        },
        '& .data-blocks-container': {
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: theme?.palette?.custom?.gutters?.medium,
        },
        '& .data-graphs': {
          gridColumn: '1 / 3',
        },
        '& .stablities': {
          gridColumn: '3 / span 1',
        },
        '& .consensus': {
          gridColumn: '4 / span 1',
        },
        '& .latest-blocks': {
          gridColumn: '1 / span 2',
        },
        '& .latest-activites': {
          gridColumn: '3 / span 2',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
