import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    toast: {
      '& .Toastify__toast': {
        background: 'rgba(253, 59, 76, 1)',
        color: 'white',
      },
      '& .Toastify__close-button > svg': {
        fill: 'white',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
