import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      padding: theme?.palette?.custom?.margins?.small,
      background: theme?.palette?.background?.paper,
      '& .tab__flex': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      '& .activities-filter-select': {
        '&.hide': {
          visibility: 'hidden',
        },
        '&.show': {
          visibility: 'visible',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '& .tab__flex': {
          flexDirection: 'row',
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
