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
      marginTop: theme.palette.custom.margins.medium,
      color: theme.palette.custom.fonts.fontOne,
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1.5rem',
        marginBottom: theme.palette.custom.margins.medium,
        marginTop: theme.palette.custom.margins.large,
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        marginBottom: '1.125rem',
        fontSize: '1.75rem',
        marginTop: '2.5rem',
      },
    },
    context: {
      fontSize: theme.typography.paragraph.fontSize,
      margin: '0',
      color: theme.palette.custom.fonts.fontTwo,
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1rem',
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        fontSize: '1rem',
        marginBottom: '2.125rem',
      },
    },
    linkContainer: {
      margin: '0',
      fontSize: '0.875rem',
      marginBottom: theme.palette.custom.margins.medium,
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1rem',
        marginBottom: theme.palette.custom.margins.large,
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        display: 'none',
      },
    },
    desktopOnly: {
      display: 'none',
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
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
      color: theme.palette.custom.fonts.fontTwo,
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        fontSize: '1.375rem',
        marginBottom: theme.palette.custom.margins.medium,
      },
    },
    paragraph: {
      fontSize: '1rem',
      margin: '0',
      marginBottom: '0.5rem',
      color: theme.palette.custom.fonts.fontThree,
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        marginBottom: theme.palette.custom.margins.large,
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        marginBottom: '2.75rem',
      },
    },

  });

  return {
    classes: useStyles(),
  };
};
