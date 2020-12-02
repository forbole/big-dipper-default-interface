import {
  makeStyles, createStyles,
} from '@material-ui/styles';

/**
 * consistent styling for latestActivitiesMobile
 */
export const useLatestActivitiesMobileStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.latest-activities-mobile': {
        '& .activity': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
          borderColor: theme?.palette?.divider,
          '&:first-child': {
            borderColor: theme?.palette?.divider,
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
