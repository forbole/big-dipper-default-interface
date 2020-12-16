import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'flex',
      padding: '0',
      '& h4': {
        margin: '0.1rem 0.3rem 0 0',
        fontWeight: 400,
      },
      '& .switch': {
        padding: '0',
        width: '2.875rem',
        height: '1.5rem',
      },
      '& .switchBase': {
        padding: '3px',
        color: theme?.palette?.type === 'light' ? '#FFFFFF' : theme?.palette?.custom?.fonts?.fontTwo,
      },
      '& .MuiSwitch-colorSecondary.Mui-checked': {
        color: theme?.palette?.type === 'light' ? '#FFFFFF' : theme?.palette?.custom?.fonts?.fontTwo,
      },
      '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
        background: theme?.palette?.divider,
      },
      '& .thumb': {
        width: '1.25rem',
        borderRadius: '2px',
        boxShadow: 'none',
        height: '1.125rem',
      },
      '& .track': {
        background: theme?.palette?.divider,
        borderRadius: '2px',
        opacity: 1,
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '& .switch': {
          height: '1.75rem',
        },
        '& .thumb': {
          height: '1.375rem',
        },
      },
    },
    focusVisible: {
    },
    thumb: {
    },
  }));

  return {
    classes: useStyles(),
  };
};
