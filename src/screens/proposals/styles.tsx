import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .data-blocks': {
        display: 'none',
      },
      '& .toggle': {
        height: '2rem',
        background: 'white',
        padding: '0 1rem 0 1rem',
      },
      '& .toggleContent': {
        float: 'right',
      },
      '& .proposalList': {
        paddingLeft: theme?.palette?.custom?.gutters?.small,
        paddingRight: theme?.palette?.custom?.gutters?.small,
        background: 'white',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        '& .data-blocks': {
          display: 'block',
        },
        '& .mobile-tablet-header': {
          display: 'none',
        },
        '& .proposalList': {
          paddingLeft: theme?.palette?.custom?.gutters?.medium,
          paddingRight: theme?.palette?.custom?.gutters?.medium,

        },
        '& .toggle': {
          background: 'inherit',
          padding: '0',
        },
        '& .MuiSwitch-colorSecondary.Mui-checked': {
          color: 'pink',
        },
        '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
          background: 'blue',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
