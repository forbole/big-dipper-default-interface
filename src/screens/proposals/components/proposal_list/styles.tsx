import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      fill: theme?.palette?.custom?.fonts?.fontFour,
      '&.big-dipper': {
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
