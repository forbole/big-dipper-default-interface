import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
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
      fontSize: '1.8333 rem',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '1.5rem 0rem 0rem 1rem',
        fontSize: '2 rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '2.5rem 0rem 0rem 1rem',
        fontSize: '1.75rem',
      },
    },
    text: {
      margin: '1rem 1rem 2rem 1rem',
      'white-space': 'pre-wrap',
      fontSize: '1.3333 rem',
      alignItems: 'center',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '0.9375rem 1rem 10.3125rem 1rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '2rem 1rem 17.5625rem 1rem',
        fontSize: '1.125rem',
      },
    },

  });

  return {
    classes: useStyles(),
  };
};

