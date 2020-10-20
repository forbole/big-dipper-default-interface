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
      marginTop: '1rem',
      // lineHeight: '1.375rem',
      color: theme.palette.custom.fonts.fontOne,
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        marginTop: '1.5rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        fontSize: '1.75rem',
        marginBottom: '1.125rem',
        marginTop: '2.5rem',
      },
    },
    context: {
      fontSize: theme.typography.paragraph.fontSize,
      margin: '0',
      // lineHeight: '1.375rem',
      color: theme.palette.custom.fonts.fontTwo,
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        fontSize: '1rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        fontSize: '1rem',
        marginBottom: '2.125rem',
      },
    },
    linkContainer: {
      margin: '0',
      fontSize: '0.875rem',
      marginBottom: '1rem',
      // lineHeight: '1.375rem',
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
      fontWeight: 550,
      // lineHeight: '1.375rem',
      color: theme.palette.custom.fonts.fontTwo,
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        fontSize: '1.375rem',
        marginBottom: '1rem',
      },
    },
    paragraph: {
      fontSize: '1rem',
      margin: '0',
      marginBottom: '0.5rem',
      // lineHeight: '1.5rem',
      color: theme.palette.custom.fonts.fontThree,
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        marginBottom: '1.5rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        marginBottom: '2.75rem',
        // lineHeight: '2.25rem',
      },
    },

  });

  return {
    classes: useStyles(),
  };
};
