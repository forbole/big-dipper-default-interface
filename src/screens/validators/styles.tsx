import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      width: '100%',
      '& .data-blocks': {
        display: 'none',
      },
      '& .validators-content': {
        height: '100%',
        background: theme?.palette?.background?.paper,
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        '& .data-blocks': {
          display: 'block',
        },
        '& .mobile-tablet-header': {
          display: 'none',
        },
      },
    },
    layout: {
      '& .children-wrapper': {
        display: 'flex',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
