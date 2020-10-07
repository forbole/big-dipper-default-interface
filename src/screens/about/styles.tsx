import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      background: theme.palette.custom.footer,
      color: theme.palette.custom.onDarkSurface,
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
    },
    title: {
      margin: '16px 0px 0px 16px',
      'white-space': 'pre-wrap',
      fontSize: '22pt',
      font: 'Helvetica Neue',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '40px 0px 0px 278px',
        fontSize: '28px',
        color: 'red',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '40px 0px 0px 278px',
        fontSize: '28px',
        color: 'yellow',
      },
    },
    text: {
      margin: '16px 16px 29px 16px',
      'white-space': 'pre-wrap',
      fontSize: '16pt',
      font: 'Helvetica Neue',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '32px 278px 281px 278px',
        fontSize: '18px',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '32px 278px 281px 278px',
        fontSize: '18px',
      },
    },

  });

  return {
    classes: useStyles(),
  };
};
