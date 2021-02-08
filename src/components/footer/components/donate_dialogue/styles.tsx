import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      zIndex: 5000,
      '& p': {
        margin: 0,
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
