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
          minHeight: '100vh',
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
            },
          },

          '& .children-wrapper': {
            [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
              marginLeft: DESKTOP_CLOSED_DRAWER_WIDTH,
              padding: '0.5rem',
              '&.desktopOpen': {
                marginLeft: DESKTOP_OPEN_DRAWER_WIDTH,
                transition: theme.transitions.create(['margin'], {
                  easing: theme.transitions.easing.easeIn,
                  duration: theme.transitions.duration.enteringScreen,
                }),
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
