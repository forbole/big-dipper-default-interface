import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles(() => createStyles({
    root: {
      // margin: '5px 0 5px 0',
    },
  }));

  return {
    classes: useStyles(),
  };
};
