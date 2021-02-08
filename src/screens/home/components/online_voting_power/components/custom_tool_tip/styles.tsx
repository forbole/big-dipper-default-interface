import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      background: theme?.palette?.background?.paperLowOpacity,
      padding: '1rem',
      borderRadius: '2px',
      boxSizing: 'border-box',
      '& p': {
        margin: '0',
        color: theme?.palette?.custom?.fonts?.fontTwo,
      },
      '& .custom-tool-tip__label': {
        marginBottom: '0.5rem',
      },
    },
  }));
  return {
    classes: useStyles(),
  };
};
