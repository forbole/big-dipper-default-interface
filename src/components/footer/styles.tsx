import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const theme: any = useTheme();

  const useStyles = makeStyles({
    root: {
      background: theme.palette.footer.main,
      color: theme.palette.onDarkSurface.main,
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
    },
    logoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      color: theme.palette.white.main,
    },
    mobileOnly: {
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        display: 'none',
      },
    },
    tabletAndUp: {
      display: 'none',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        display: 'block',
        borderRadius: '20px',
      },
    },
    listContainer: {
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        flex: 1,
        marginLeft: '2rem',
        paddingTop: 0,
      },
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    listItem: {
      whiteSpace: 'nowrap',
      width: 'auto',
      padding: '0',
      fontSize: theme.typography.body3.fontSize,
      '& span': {
        margin: '0 1rem',
      },
    },
    playStore: {
      display: 'none',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    socialMediaContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        alignSelf: 'flex-end',
        '& svg': {
          width: '22px',
        },
      },
    },
    socialMediaContent: {
      marginRight: '0.7rem',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    copyright: {
      color: theme.palette.onDarkSurface.main,
    },
    logo: {
      width: '150px',
    },
    appleBadge: {
      '& img': {
        width: '100px',
      },
      marginRight: '0.5rem',
    },
    googleBadge: {
      '& img': {
        width: '110px',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
