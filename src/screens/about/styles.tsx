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
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        padding: theme?.palette?.custom?.margins?.large,
      },
    },
    title: {
      fontSize: '1.375rem',
      fontWeight: 400,
      margin: '0',
      marginBottom: '0.5rem',
      [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
        fontSize: '1.5rem',
      },
      [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
        fontSize: '1.75rem',
      },
    },
    text: {
      fontSize: '1rem',
      margin: '0',
      whiteSpace: 'pre-wrap',
    },

  });

  return {
    classes: useStyles(),
  };
};
