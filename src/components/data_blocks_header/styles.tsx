import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridAutoRows: '1fr',
      gridGap: theme?.palette?.custom?.gutters?.small,
      '& .data-block': {
        color: theme?.palette?.type === 'light' ? 'white' : theme?.palette?.custom?.fonts?.fontOne,
      },
      '& .latest-block-height': {
        background: theme?.palette?.custom?.dashboardData?.dashOne,
      },
      '& .average-block-time': {
        background: theme?.palette?.custom?.dashboardData?.dashTwo,
      },
      '& .price': {
        background: theme?.palette?.custom?.dashboardData?.dashThree,
      },
      '& .active-validators': {
        background: theme?.palette?.custom?.dashboardData?.dashFour,
      },
      '& .MuiSelect-select.MuiSelect-select': {
        width: '0',
        opacity: '0',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        '& .MuiSelect-select.MuiSelect-select': {
          width: '100%',
          opacity: '1',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
