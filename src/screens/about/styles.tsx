import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
<<<<<<< HEAD
      background: theme.palette.custom.footer,
      color: theme.palette.custom.onDarkSurface,
      display: 'flex',
      flexDirection: 'row',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
      },
      [getMinMediaQuery(theme.breakpoints.maxWidth)]: {
      },
    },
    title: {
      margin: '1rem 0rem 0rem 1rem',
      'white-space': 'pre-wrap',
      fontSize: '1.8333rem',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '1.5rem 0rem 0rem 1rem',
        fontSize: '2 rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '2.5rem 0rem 0rem 1rem',
=======
      padding: '1rem 1rem 2.5rem',
    },
    title: {
      fontSize: '1.375rem',
      fontWeight: 400,
      margin: '0',
      marginBottom: '0.5rem',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        fontSize: '1.5rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
>>>>>>> 4865141af5ca059a0386b6e103ce0d70b34dea02
        fontSize: '1.75rem',
      },
    },
    text: {
<<<<<<< HEAD
      margin: '1rem 1rem 2rem 1rem',
      'white-space': 'pre-wrap',
      fontSize: '1.3333 rem',
      alignItems: 'center',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '0.9375rem 1rem 10.3125rem 1rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '2rem 1rem 17.5625rem 1rem',
=======
      fontSize: '1rem',
      margin: '0',
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
>>>>>>> 4865141af5ca059a0386b6e103ce0d70b34dea02
        fontSize: '1.125rem',
      },
    },

  });

  return {
    classes: useStyles(),
  };
};
