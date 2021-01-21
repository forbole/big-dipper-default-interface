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
      '& .header__status': {
        color: theme?.palette?.custom?.white,
        '&.active': {
          background: 'rgba(30, 196, 144, 1)',
        },
        '&.jailed': {
          background: 'rgba(255, 177, 42, 1)',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        padding: theme?.palette?.custom?.margins?.large,
        '&.validator-profile': {
          minHeight: '250px',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
