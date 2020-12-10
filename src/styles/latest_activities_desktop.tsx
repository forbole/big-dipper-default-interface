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
        // wingman
        // padding: theme?.palette?.custom?.margins?.large,
        '& .single-activity': {
          '&:hover': {
            cursor: 'pointer',
          },
          '&.active': {
            background: theme?.palette?.custom?.table?.rowOdd,
          },
        },
        '& .MuiTableCell-root': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
          borderColor: theme?.palette?.divider,
        },
        '& .collapsible-table-row': {
          background: theme?.palette?.custom?.table?.rowOdd,
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
