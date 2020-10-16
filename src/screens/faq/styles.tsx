import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      padding: '1rem 1rem 2.5rem',
    },
    title: {
      fontSize: '1.375rem',
      fontWeight: 500,
      margin: '0',
      marginBottom: '0.5rem',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        fontSize: '1.75rem',
        marginBottom: '1.125rem',
      },
    },
    context: {
      fontSize: '0.875rem',
      margin: '0',
      marginBottom: '0.25rem',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        fontSize: '1rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        fontSize: '1rem',
        marginBottom: '2.625rem',
      },
    },
    link: {
      fontSize: '0.875rem',
      margin: '0',
      color: '#1D86FF',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        fontSize: '1rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        display: 'none',
      },
    },
    desktopOnly: {
      display: 'none',
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        display: 'inline',
        marginLeft: '0.5rem',
        color: '#1D86FF',
      },
    },

    subTitle: {
      fontSize: '1rem',
      margin: '0',
      marginBottom: '0.5rem',
      marginTop: '1rem',
      fontWeight: 550,
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        fontSize: '1.25rem',
        marginTop: '1.5rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        fontSize: '1.375rem',
        marginBottom: '1rem',
        marginTop: '2.625rem',
      },
    },
    paragraph: {
      fontSize: '1rem',
      margin: '0',
      marginBottom: '1.5rem',
      fontWeight: 400,
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        marginBottom: '2.5rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        marginBottom: '3.75rem',
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

  });

  return {
    classes: useStyles(),
  };
};
