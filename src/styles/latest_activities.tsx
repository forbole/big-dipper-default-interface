import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

/**
 * consistent styling for LatestActivities
 */
export const useLatestActivitiesStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .header__timestamp': {
        display: 'none',
      },
      '&.activities-list': {
        color: theme.palette.custom.fonts.fontTwo,
        '& .single-transaction__header': {
          padding: `0.5rem ${theme?.palette?.custom?.margins?.large}`,
          background: theme?.palette?.custom?.table?.rowOdd,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        '& .header__timestamp': {
          display: 'block',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
