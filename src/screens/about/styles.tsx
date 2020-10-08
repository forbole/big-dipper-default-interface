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
      [getMinMediaQuery(theme.breakpoints.maxWidth)]: {
        flexDirection: 'row',
      },
    },
    title: {
      margin: '16px 0px 0px 16px',
      'white-space': 'pre-wrap',
      fontSize: '22pt',
      font: 'Helvetica Neue',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '24px 0px 0px px',
        fontSize: '24pt',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '40px 0px 0px 278px',
        fontSize: '28px',
      },
      [getMinMediaQuery(theme.breakpoints.maxWidth)]: {
        margin: '40px 0px 0px 278px',
      },
    },
    text: {
      margin: '16px 16px 29px 16px',
      'white-space': 'pre-wrap',
      fontSize: '16pt',
      font: 'Helvetica Neue',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        margin: '15px 16px 165px 16px',
        fontSize: '16pt',
      },
      [getMinMediaQuery(theme.breakpoints.desktop)]: {
        margin: '32px 278px 281px 278px',
        fontSize: '18px',
      },
      [getMinMediaQuery(theme.breakpoints.maxWidth)]: {
        maxWidth: `calc(${theme.breakpoints.maxWidth} - 556px)`,
      },
    },

  });

  return {
    classes: useStyles(),
  };
};
