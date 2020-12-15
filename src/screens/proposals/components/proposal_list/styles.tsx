import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      fill: theme?.palette?.custom?.fonts?.fontFour,
      cursor: 'pointer',
      '&.big-dipper': {
        '& .cell': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
        },
        '& .days': {
          color: theme?.palette?.type === 'light' ? '#FD7522' : '#FD7522B3',
        },
        '& .statusContent': {
          color: theme?.palette?.custom?.fonts?.fontOne,
        },
        '& .button': {
          color: theme?.palette?.type === 'light' ? '#FFFFFF' : theme?.palette?.custom?.fonts?.fontOne,
        },
        '& .table': {
          '& tr': {
            borderBottomColor: theme?.palette?.type === 'light' ? '#E8E8E8' : '#3D3D43',
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
