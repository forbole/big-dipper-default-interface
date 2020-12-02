import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      padding: '1rem 0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

  return {
    classes: useStyles(),
  };
};
