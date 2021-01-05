import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      borderRadius: '4px',
      background: theme?.palette?.background?.paper,
      padding: theme?.palette?.custom?.margins?.small,
      color: theme?.palette?.custom?.fonts?.fontOneToTwo,
      '& .content__link': {
        '& a': {
          color: theme?.palette?.custom?.fonts?.fontFive,
        },
      },
      '& svg': {
        fontSize: '1.375rem',
        color: theme?.palette?.custom?.fonts?.fontThree,
      },
      '& .keybase__display': {
        '& svg': {
          color: '#15CF74',
        },
      },
      '& .avatarDisplay': {
        '& div': {
          color: theme?.palette?.custom?.fonts?.fontOne,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        padding: theme?.palette?.custom?.margins?.large,
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
