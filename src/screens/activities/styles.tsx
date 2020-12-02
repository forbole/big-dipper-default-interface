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
        '& .MuiInputBase-root': {
          width: '100%',
          border: `1px solid ${theme?.palette?.divider}`,
        },
        '& .MuiSelect-select.MuiSelect-select': {
          paddingLeft: '0.5rem',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          fontSize: '0.875rem',
          color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        },
        '& .select__placeholder': {
          color: theme?.palette?.custom?.fonts?.fontFour,
          margin: 0,
          fontSize: '0.875rem',
        },
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
          '& .content-header__select': {
            '&.MuiInputBase-root': {
              width: 'auto',
              minWidth: '300px',
            },
          },
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
    filterMenu: {
      '&.MuiMenuItem-root': {
        color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        fontSize: '1rem',
      },
    },
    latestActivitiesMobile: {
      '&.latest-activities-mobile': {
        '& .activity': {
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
