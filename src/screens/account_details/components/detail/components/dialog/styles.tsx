import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles(() => createStyles({
    root: {
      '& .socialMedia': {
        marginTop: '1rem',
      },
      '& .buttonDisplay': {
        width: '2.5rem',
        height: '2.5rem',
        marginRight: '0.5rem',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
