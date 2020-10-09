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
      fontSize: '22pt',
      font: 'Helvetica Neue',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '1.5rem 0rem 0rem 1rem',
        fontSize: '24pt',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '2.5rem 0rem 0rem 17.375rem',
        fontSize: '28px',
      },
      [getMinMediaQuery(theme.breakpoints.maxWidth)]: {
        margin: '2.5rem 0rem 0rem 17.375rem',
      },
    },
    text: {
      margin: '1rem 1rem 29px 1rem',
      'white-space': 'pre-wrap',
      fontSize: '16pt',
      font: 'Helvetica Neue',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '15px 1rem 165px 1rem',
        fontSize: '16pt',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '32px 17.375rem 281px 17.375rem',
        fontSize: '1.125rem',
      },
      [getMinMediaQuery(theme.breakpoints.maxWidth)]: {
        maxWidth: `calc(${theme.breakpoints.maxWidth} - 34.75rem)`,
      },
    },

  });

  return {
    classes: useStyles(),
  };
};
