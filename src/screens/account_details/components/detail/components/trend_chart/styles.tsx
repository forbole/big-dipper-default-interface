import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.mainContainer': {
        display: 'flex',
        minWidth: '20rem',
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
        color: theme?.palette?.custom?.fonts.fontTwo,
      },

    },
  }));

  return {
    classes: useStyles(),
  };
};
