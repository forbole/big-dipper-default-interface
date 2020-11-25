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
        '& .activity': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
          borderColor: theme?.palette?.divider,
          '&:first-child': {
            borderColor: theme?.palette?.divider,
          },
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'none',
      },
    },
    desktop: {
    },
  }));

  return {
    classes: useStyles(),
  };
};
