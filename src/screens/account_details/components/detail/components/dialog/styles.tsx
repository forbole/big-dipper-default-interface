import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles(() => createStyles({
    root: {
      '& .chart': {
        position: 'relative',
      },
      '& .chartArea': {
        right: 0,
        bottom: 0,
        position: 'absolute',
        margin: 0,
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
