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
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        '& .header__timestamp': {
          display: 'block',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '& .single-transaction__header': {
          padding: `0.5rem ${theme?.palette?.custom?.margins?.large}`,
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
