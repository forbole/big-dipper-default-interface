import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .mobile-tablet-header': {

      },
      '& .account-details': {
        height: '500px',
        background: 'pink',
        border: 'solid 1px black',
      },
      '& .account-staking': {
        height: '500px',
        background: 'yellow',
        border: 'solid 1px black',
      },
      '& .account-activities': {
        height: '500px',
        background: 'lime',
        border: 'solid 1px black',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
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
