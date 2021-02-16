import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return (
      createStyles({
        root: {
          height: '100%',
          padding: theme?.palette?.custom?.margins?.small,
          background: theme?.palette?.background?.paper,
          '& .chart': {
            height: '250px',
          },
          [getMinMediaQuery(theme.breakpoints.values.tablet)]: {

          },
          [getMinMediaQuery(theme.breakpoints.values.desktop)]: {

          },
        },
      })
    );
  });

  return {
    classes: useStyles(),
  };
};
