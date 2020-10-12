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
      fontWeight: 400,
      margin: '0',
      marginBottom: '0.5rem',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        fontSize: '1.5rem',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        fontSize: '1.75rem',
      },
    },
    text: {
      fontSize: '1rem',
      margin: '0',
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        fontSize: '1.125rem',
      },
    },

  });

  return {
    classes: useStyles(),
  };
};
