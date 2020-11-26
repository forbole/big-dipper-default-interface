import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      color: theme?.palette?.custom?.fonts?.fontFive,
      marginTop: '10px',
    },
  }));

  return {
    classes: useStyles(),
  };
};
