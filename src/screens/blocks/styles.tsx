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
      '& > *': {
        background: 'pink',
      },
      '& .data-blocks': {
        display: 'none',
      },
      '& .mobile-tablet-header': {
        height: '100px',
      },
      '& .blocks-content': {
        height: '500px',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '& .data-blocks': {
          display: 'block',
          height: '150px',
        },
        '& .mobile-tablet-header': {
          display: 'none',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
