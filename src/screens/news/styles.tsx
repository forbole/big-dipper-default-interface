import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'grid',
      gridGap: theme?.palette?.custom?.gutters?.small,
      padding: theme?.palette?.custom?.gutters?.small,
      '& .mobile-tablet-header': {
        height: '50px',
        background: 'pink',
      },
      '& .news-content': {
        height: '500px',
      },
      '& .slider': {
        height: '100px',
        background: 'purple',
      },
      '& .blogs': {
        background: 'yellow',
      },
      '& .cosmos': {
        background: 'teal',
        height: '300px',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        '& .mobile-tablet-header': {
          display: 'none',
        },
        '& .news-content': {
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: theme?.palette?.custom?.gutters?.medium,
        },
        '& .blogs-container': {
          gridColumn: '1 / span 3',
          display: 'grid',
          gridGap: theme?.palette?.custom?.gutters?.medium,
        },
        '& .blogs': {
          height: '700px',
        },
        '& .cosmos': {
          gridColumn: '4 / span 1',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
