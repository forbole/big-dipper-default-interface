import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { rgbaOpacityConverter } from '@utils';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      marginTop: '1rem',
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'flex-end',
      '& .tag': {
        background: rgbaOpacityConverter(
          theme?.palette?.custom?.fonts?.fontFour,
          0.3,
        ),
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {

      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
