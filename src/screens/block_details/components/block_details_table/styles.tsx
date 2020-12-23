import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.big-dipper': {
        background: theme?.palette?.background?.paper,
        // background: 'red',
        '& .cell': {
          color: theme?.palette?.custom?.fonts.fontOne,
        },
        '& .txHashValue': {
          color: '#1D86FF',
        },
        '& .table': {
          '& tr': {
            borderBottomColor: theme?.palette?.divider,
            '&:last-child': {
              borderBottom: 'none',
            },
          },
        },
        '& .icon': {
          width: '10rem',
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {

      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
