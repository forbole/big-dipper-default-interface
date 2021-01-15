import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .avatarDisplay': {
        '& .display': {
          wordBreak: 'break-all',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
