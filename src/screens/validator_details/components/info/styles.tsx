import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.validator-info': {
        '& .validator-info__header': {
          color: theme.palette.custom.fonts.fontOne,
        },
        '& .label, & .detail': {
          color: theme.palette.custom.fonts.fontTwo,
        },
        '& .validator-info__header, & .detail': {
          borderColor: theme?.palette?.divider,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '&.validator-info': {
          padding: theme?.palette?.custom?.margins?.large,
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
