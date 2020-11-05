import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return (
      createStyles({
        root: {
          '& a': {
            color: 'inherit',
            textDecoration: 'none',
          },

          '& .mobile-nav': {
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
        },
      })
    );
  });

  return {
    classes: useStyles(),
  };
};
