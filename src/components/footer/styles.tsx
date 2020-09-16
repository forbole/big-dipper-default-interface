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
    },
    mainContent: {
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
      [getMinMediaQuery(theme.breakpoints.tablet)]: {
        display: 'flex',
      },
    },
    socialMediaContent: {
      alignSelf: 'flex-end',
      marginRight: '1rem',
    },
  });

  return {
    classes: useStyles(),
  };

  // const PlayStoreCSS = styled(Box)({
  // display: 'none',
  // [getMinMediaQuery(theme.breakpoints.tablet)]: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // });

  // return {
  //   FooterCSS,
  //   LogoContainerCSS,
  //   LinkItemCSS,
  //   LinkListCSS,
  //   LinkSpacingCSS,
  //   MainFooterContentCSS,
  //   MobileDonateButtonCSS,
  //   DonateButtonCSS,
  //   SocialMediaCSS,
  //   SocialMediaContainerCSS,
  //   LinkContainerCSS,
  //   PlayStoreCSS,
  // };
};
