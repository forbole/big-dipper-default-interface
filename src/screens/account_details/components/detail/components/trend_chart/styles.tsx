import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles(() => createStyles({
    root: {
      '& .mainContainer': {
        display: 'flex',
        width: '50rem',
      },
      '& .numberContainer': {
        display: 'flex',
        marginRight: '0.5rem',
        position: 'relative',
      },
      '& .numberDisplay': {
        alignSelf: 'flex-end',
        display: 'flex',
      },
      '& .arror-icon': {
        width: '1rem',
        height: '1rem',
        color: '#FD3B4C',
      },
      '& p': {
        margin: '0',
        fontSize: '14px',
      },

    },
  }));

  return {
    classes: useStyles(),
  };
};
