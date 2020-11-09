import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

const DESKTOP_OPEN_DRAWER_WIDTH = 230;
const DESKTOP_CLOSED_DRAWER_WIDTH = 55;

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return (
      createStyles({
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          '& > *': {
            width: '100%',
          },
          '& a': {
            color: 'inherit',
            textDecoration: 'none',
          },

          '& .mobile-nav-wrapper': {
            '& .mobile-nav-open-content': {
              padding: 0,
            },
            '& .navbar-item': {
              '& .MuiListItemIcon-root': {
                minWidth: '40px',
              },
            },
            [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
              display: 'none',
            },
          },

          '& .desktop-nav': {
            display: 'none',
            [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
              display: 'flex',
              '& .network-open': {
                '& .actions': {
                  alignItems: 'flex-start',
                },
                '& .logo': {
                  width: '215px',
                },
              },
            },
          },

          '& .children-wrapper': {
            flex: 1,
            [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
              paddingLeft: `${DESKTOP_CLOSED_DRAWER_WIDTH}px`,
              transition: theme.transitions.create(['padding'], {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.enteringScreen,
              }),
              '&.desktopOpen': {
                paddingLeft: `${DESKTOP_OPEN_DRAWER_WIDTH}px`,
              },
            },
          },

          '& .footer': {
            [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
              position: 'relative',
              zIndex: 3000,
            },
          },
        },
      })
    );
  });

  return {
    classes: useStyles(),
  };
};
