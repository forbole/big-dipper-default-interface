import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles(() => createStyles({
    root: {
      '& .socialMedia': {
        marginBottom: '0',
      },
      '& .socialMediaContent': {
        marginTop: '1rem',
        marginLeft: '0',
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
