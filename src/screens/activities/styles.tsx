import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .activities-content': {
        padding: theme?.palette?.custom?.margins?.small,
        background: theme?.palette?.background?.paper,
      },
      '& .content-header': {
        marginBottom: '1.5rem',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        '& .activities-content': {
          padding: theme?.palette?.custom?.margins?.large,
          borderRadius: '6px',
        },
        '& .content-header': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        },
        '& .content-header__title--desktop': {
          margin: 0,
          fontWeight: 500,
          fontSize: '1.5rem',
          whiteSpace: 'nowrap',
          color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
