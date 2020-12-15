import {
  makeStyles, createStyles,
} from '@material-ui/styles';

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
      },
      '& .switchBase': {
        padding: '3px',
        color: theme?.palette?.type === 'light' ? '#FFFFFF' : theme?.palette?.custom?.fonts?.fontTwo,
        '&$focusVisible $thumb': {
        },
      },
      '& .MuiSwitch-colorSecondary.Mui-checked': {
        color: theme?.palette?.type === 'light' ? '#FFFFFF' : theme?.palette?.custom?.fonts?.fontTwo,
      },
      '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
        background: theme?.palette?.type === 'light' ? '#E8E8E8' : '#3D3D43',
      },
      '& .thumb': {
        width: '1.25rem',
        borderRadius: '2px',
        boxShadow: 'none',
      },
      '& .track': {
        background: theme?.palette?.type === 'light' ? '#E8E8E8' : '#3D3D43',
        borderRadius: '2px',
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
      },
      '& .checked': {
      },
      '& .focusVisible': {
      },
    },
    desktop: {
      '& .switch': {
        height: '1.75rem',
        color: 'blue',

      },
      '& .thumb': {
        height: '1.375rem',
      },
    },
    mobile: {
      '& .switch': {
        height: '1.5rem',
      },
      '& .thumb': {
        height: '1.125rem',
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
