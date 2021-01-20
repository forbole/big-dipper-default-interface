import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      padding: theme?.palette?.custom?.margins?.small,
      background: theme?.palette?.background?.paper,
      '&.userInfoMobile': {
        padding: theme?.palette?.custom?.margins?.small,
        paddingTop: '0',
      },
      '&.userInfoDesktop': {
        display: 'none',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        '&.userInfoDesktop': {
          background: theme?.palette?.background?.paper,
          padding: theme?.palette?.custom?.margins?.large,
          display: 'block',
          '& .dataContent': {
            marginRight: '5rem',
          },
        },
        '&.userInfoMobile': {
          display: 'none',
        },

      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
