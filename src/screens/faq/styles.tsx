import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    layout: {
      background: theme?.palette?.type === 'light' ? theme?.palette?.background?.paper : theme?.palette?.background?.background,
    },
    root: {
      padding: theme?.palette?.custom?.margins?.small,
      paddingBottom: theme?.palette?.custom?.gutters?.large,
      '& .topic__title': {
        margin: '0 0 0.5rem',
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        padding: theme?.palette?.custom?.margins?.large,
        '& .topic__title': {
          marginBottom: '1rem',
        },
      },
    },
    title: {
      fontSize: '1.375rem',
      fontWeight: 500,
      marginTop: 0,
      marginBottom: theme?.palette?.custom?.gutters?.small,
      color: theme.palette.custom.fonts.fontOne,
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1.5rem',
        marginBottom: theme.palette.custom.margins.medium,
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        marginBottom: theme.palette.custom.margins.large,
        fontSize: '1.75rem',
      },
    },
    context: {
      margin: '0',
      fontSize: theme?.typography?.paragraph?.fontSize,
      color: theme.palette.custom.fonts.fontTwo,
      marginBottom: theme?.palette?.custom?.gutters?.small,
      '& .mail-link': {
        color: theme.palette.custom.fonts.fontFive,
      },
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1rem',
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        marginBottom: theme?.palette?.custom?.gutters?.large,
      },
    },
    subTitle: {
      margin: '0',
      marginBottom: theme?.palette?.custom?.gutters?.small,
      fontWeight: 700,
      color: theme.palette.custom.fonts.fontTwo,
      fontSize: '1rem',
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        fontSize: '1.375rem',
      },
    },
    paragraph: {
      margin: '0',
      marginBottom: theme?.palette?.custom?.gutters?.small,
      color: theme.palette.custom.fonts.fontThree,
      whiteSpace: 'pre-line',
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        marginBottom: theme.palette.custom.margins.large,
      },
    },

  });

  return {
    classes: useStyles(),
  };
};
