import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.MuiMenuItem-root': {
        color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        fontSize: '1rem',
      },
    },
    select: {
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
      '&.MuiInputBase-root': {
        border: `1px solid ${theme?.palette?.divider}`,
        width: '100%',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '&.MuiInputBase-root': {
          width: 'auto',
          minWidth: '300px',
          background: theme.palette.background.default,
          border: 'none',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
