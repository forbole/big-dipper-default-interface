import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .blocks-content': {
        background: theme?.palette?.background?.paper,
        padding: `0 ${theme?.palette?.custom?.margins?.small}`,
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        '& .blocks-content': {
          padding: theme?.palette?.custom?.margins?.large,
          borderRadius: '6px',
        },
        '& .blocks-content__header--desktop': {
          margin: '0 0 1rem',
          fontWeight: 500,
          fontSize: '1.5rem',
          color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        },
        '& .mobile-tablet-header': {
          display: 'none',
        },
      },
    },
    latestBlocksMobile: {
      '&.latest-blocks-mobile': {
        '& .single-block': {
          '&:first-child': {
            borderTop: 'none',
          },
          '&:last-child': {
            borderBottom: 'none',
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
