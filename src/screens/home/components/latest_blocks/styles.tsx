import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    mobile: {
      '&.table-preview-wrapper': {
        background: theme?.palette?.background?.paper,
      },
      '& .top-bar': {
        '& h3': {
          color: theme?.palette?.custom?.fonts?.fontOne,
        },
      },
      '& .content': {
        '& .single-block': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
          borderColor: theme?.palette?.divider,
          '&:first-child': {
            borderColor: theme?.palette?.divider,
          },
          '& .time': {
            color: theme?.palette?.custom?.fonts?.fontThree,
          },
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'none',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
