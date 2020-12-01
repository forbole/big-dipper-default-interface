import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      // textAlign: 'center',
      // color: theme?.palette?.custom?.fonts?.fontThree,
      // fontSize: '1.125rem',
      // margin: 0,
    },
  }));

  return {
    classes: useStyles(),
  };
};
