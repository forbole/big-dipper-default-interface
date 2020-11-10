import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

// THIS IS A PLACE HOLDER STYLES TO SET UP LAYOUT REMOVE LATER
export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      background: 'pink',
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridGap: theme?.palette?.custom?.gutters?.small,
      '& > *': {
        border: 'black solid 1px',
        padding: theme?.palette?.custom?.gutters?.small,
      },
      '& .data-blocks-container': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: theme?.palette?.custom?.gutters?.small,
        '& > *': {
          border: 'black solid 1px',
          height: '80px',
        },
        // [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        //   gridTemplateColumns: 'repeat(4, 1fr)',
        //   gridGap: theme?.palette?.custom?.gutters?.medium,
        // },
      },
      '& .data-graphs': {
        height: '200px', // data display holder
      },
      '& .data-wrapper': {
        background: 'green',
        '& > *': {
          border: 'black solid 1px',
        },
        '& .stablities': {
          height: '200px', // data display holder
        },
      },
      '& .latest-blocks': {
        height: '200px', // data display holder
      },
      '& .latest-activites': {
        height: '200px', // data display holder
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
