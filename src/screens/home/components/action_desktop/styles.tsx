import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles(createStyles({
    root: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
      '&.MuiButton-label': {
        lineHeight: '1.2',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
