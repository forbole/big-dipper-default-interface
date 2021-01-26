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
    },
  }));

  return {
    classes: useStyles(),
  };
};
