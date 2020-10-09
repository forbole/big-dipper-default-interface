import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  });

  return {
    classes: useStyles(),
  };
};
