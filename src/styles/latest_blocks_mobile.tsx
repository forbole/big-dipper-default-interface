import {
  makeStyles, createStyles,
} from '@material-ui/styles';

/**
 * consistent styling for latestBlocksMobile
 */
export const useLatestBlocksMobileStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.latest-blocks-mobile': {
        '& .single-block': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
          borderColor: theme?.palette?.divider,
          '&:first-child': {
            borderTop: 'none',
          },
          '&:last-child': {
            borderBottom: 'none',
          },
          '& .time': {
            color: theme?.palette?.custom?.fonts?.fontThree,
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
