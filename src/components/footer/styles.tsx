import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& a': {
        color: 'inherit',
      },
      '& .apple': {
        '& img': {
          width: '100px',
        },
      },
      '& .google': {
        '& img': {
          width: '110px',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
