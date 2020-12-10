import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.MuiMenuItem-root': {
        color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        fontSize: '1rem',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
