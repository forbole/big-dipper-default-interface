import {
  makeStyles, createStyles,
} from '@material-ui/styles';

/**
 * consistent styling for latestActivitiesDesktop
 */
export const useLatestActivitiesDesktopStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.latest-activities-desktop': {
        '& .single-activity': {
          '&:hover': {
            cursor: 'pointer',
          },
        },
        '& .MuiTableCell-root': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
          borderColor: theme?.palette?.divider,
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
