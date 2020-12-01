import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'flex',
      '& div': {
        color: theme?.palette?.custom?.fonts?.fontFive,
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
