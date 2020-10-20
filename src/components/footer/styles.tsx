import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& a': {
        color: 'inherit',
      },
<<<<<<< HEAD
    },
    logoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      color: theme.palette.custom.white,
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
      // fontSize: theme.typography.body3.fontSize,
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
=======
      '& .apple': {
        '& img': {
          width: '100px',
>>>>>>> 520d01e084d0f1b1e01ddb056a5890048f1cc0b2
        },
      },
      '& .google': {
        '& img': {
          width: '110px',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
