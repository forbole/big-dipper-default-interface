import {
  makeStyles, createStyles,
} from '@material-ui/styles';

/**
 * consistent styling for latestBlocksDesktop
 */
export const useLatestBlocksDesktopStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.latest-blocks-desktop': {
        '& .MuiTableCell-head': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
        },
        '& .table': {
          background: theme?.palette?.background?.paper,
        },
        '& .single-row': {
          '&:hover': {
            cursor: 'pointer',
          },
          '&:nth-of-type(odd)': {
            background: theme?.palette?.custom?.table?.rowOdd,
          },
          '& .cell': {
            color: theme?.palette?.custom?.fonts?.fontTwo,
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
