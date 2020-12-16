import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      background: theme?.palette?.background?.paper,
      '& .tab__flex': {
        padding: theme?.palette?.custom?.margins?.small,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      '& .activities-filter-select': {
        marginTop: theme?.palette?.custom?.margins?.small,
        '&.hide': {
          display: 'none',
        },
        '&.show': {
          display: 'flex',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '& .tab__flex': {
          flexDirection: 'row',
          padding: theme?.palette?.custom?.margins?.large,
        },
        '& .data-container': {
          '& .latest-activities-desktop': {
            paddingTop: 0,
          },
        },
      },
    },
    latestActivitiesMobile: {
      '&.latest-activities-mobile': {
        marginTop: 0,
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
