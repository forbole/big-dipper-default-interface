import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .activities-content': {
        background: theme?.palette?.background?.paper,
        padding: `0 ${theme?.palette?.custom?.margins?.small}`,
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        '& .activities-content': {
          padding: theme?.palette?.custom?.margins?.large,
          borderRadius: '6px',
        },
      },
    },
    latestActivitiesMobile: {
      '&.latest-activities-mobile': {
        '& .activity': {
          '&:first-child': {
            borderTop: 'none',
          },
          '&:last-child': {
            borderBottom: 'none',
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
