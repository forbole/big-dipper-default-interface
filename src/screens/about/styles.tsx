import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';
import { FormatSize } from '@material-ui/icons';

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
      color: theme.palette.custom.onDarkSurface,
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
    title:{
      margin:'40px 0px 0px 278px',
      'white-space': 'pre-wrap',
      fontSize:'28px',
      font:'Helvetica Neue'
    },
    titleMobile:{
      margin:'16px 0px 0px 16px',
      'white-space': 'pre-wrap',
      fontSize:'22pt',
      font:'Helvetica Neue'
    },
    text:{
      margin:'32px 278px 281px 278px',
      'white-space': 'pre-wrap',
      fontSize:'18px',
      font:'Helvetica Neue'
    },
    textMobile:{
      margin:'16px 16px 29px 16px',
      'white-space': 'pre-wrap',
      fontSize:'16pt',
      font:'Helvetica Neue'
    }

  });

  return {
    classes: useStyles(),
  };
};
