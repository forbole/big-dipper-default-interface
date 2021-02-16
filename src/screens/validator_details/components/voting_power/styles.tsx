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
          background: theme?.palette?.background?.paper,
          padding: theme?.palette?.custom?.margins?.small,
          '& h3': {
            color: theme?.palette?.custom?.fonts?.fontOneToTwo,
            marginTop: 0,
            fontSize: '1.375rem',
            fontWeight: 400,
          },
          '& .chart': {
            height: '250px',
          },
          [getMinMediaQuery(theme.breakpoints.values.tablet)]: {
            '& .chart': {
              height: '350px',
            },
          },
          [getMinMediaQuery(theme.breakpoints.values.desktop)]: {
            padding: theme?.palette?.custom?.margins?.large,
            '& h3': {
              fontSize: '1.5rem',
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
