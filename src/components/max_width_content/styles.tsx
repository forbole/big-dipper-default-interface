import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: theme?.breakpoints?.maxWidth ?? '1080px',
    },
  });

  return {
    classes: useStyles(),
  };
};
