import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .data-blocks': {
        display: 'none',
      },
      '& .activity-details, & .activity-details-content': {
        height: '100%',
      },
      '& .activity-details-content': {
        '& .activity-details': {
          color: theme.palette.custom.fonts.fontTwo,
          background: theme?.palette?.background?.paper,
        },
        '& .activity-details__content-wrapper': {
          borderTop: `solid 1px ${theme?.palette?.divider}`,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        display: 'grid',
        padding: theme?.palette?.custom?.gutters?.medium,
        gridGap: theme?.palette?.custom?.gutters?.medium,
        gridTemplateRows: 'auto 1fr',
        '& .data-blocks': {
          display: 'block',
        },
        '& .mobile-tablet-header': {
          display: 'none',
        },
        '& .activity-details': {
          borderRadius: '6px',
        },
      },
    },
    layout: {
      '& .children-wrapper': {
        display: 'flex',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
