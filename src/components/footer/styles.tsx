import { styled } from '@material-ui/styles';
import {
  Box,
  ListItem,
  List,
  Button,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '@styles';

export const useStyles = () => {
  const theme: any = useTheme();

  const FooterCSS = styled(Box)({
    background: theme.palette.footer.main,
    color: theme.palette.onDarkSurface.main,
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
  });

  const MainFooterContentCSS = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    [getMinMediaQuery(theme.breakpoints.tablet)]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  });

  const LogoContainerCSS = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    color: theme.palette.white.main,
  });

  const LinkContainerCSS = styled(Box)({
    [getMinMediaQuery(theme.breakpoints.tablet)]: {
      flex: 1,
      marginLeft: '3rem',
      paddingTop: 0,
    },
  });

  const LinkListCSS = styled(List)({
    display: 'flex',
    flexWrap: 'wrap',
  });

  const LinkItemCSS:any = styled(ListItem)({
    whiteSpace: 'nowrap',
    width: 'auto',
    padding: '0',
    fontSize: theme.typography.body3.fontSize,
  });

  const LinkSpacingCSS = styled(Box)({
    margin: '0 1rem',
  });

  const MobileDonateButtonCSS = styled(Button)({
    [getMinMediaQuery(theme.breakpoints.tablet)]: {
      display: 'none',
    },
  });

  const DonateButtonCSS = styled(Button)({
    display: 'none',
    [getMinMediaQuery(theme.breakpoints.tablet)]: {
      display: 'block',
      borderRadius: '20px',
    },
  });

  const SocialMediaContainerCSS = styled(Box)({
    [getMinMediaQuery(theme.breakpoints.tablet)]: {
      display: 'flex',
    },
  });

  const SocialMediaCSS = styled(Typography)({
    alignSelf: 'flex-end',
    marginRight: '1rem',
  });

  const PlayStoreCSS = styled(Box)({
    display: 'none',
    [getMinMediaQuery(theme.breakpoints.tablet)]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return {
    FooterCSS,
    LogoContainerCSS,
    LinkItemCSS,
    LinkListCSS,
    LinkSpacingCSS,
    MainFooterContentCSS,
    MobileDonateButtonCSS,
    DonateButtonCSS,
    SocialMediaCSS,
    SocialMediaContainerCSS,
    LinkContainerCSS,
    PlayStoreCSS,
  };
};
