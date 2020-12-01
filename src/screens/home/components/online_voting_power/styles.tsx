import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      // textAlign: 'center',
      // color: theme?.palette?.custom?.fonts?.fontThree,
      // fontSize: '1.125rem',
      // margin: 0,
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '& .selected-title': {
          fontSize: '1.5rem',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
