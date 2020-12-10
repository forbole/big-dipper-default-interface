import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      width: '2.875rem',
      padding: '0',
      // margin: theme.spacing(1),
      '& .switchBase': {
        padding: '3px',
        '&$checked': {
          transform: 'translateX(16px)',
          color: theme.palette.common.white,
          borderRadius: 2,
          '& + $track': {
            opacity: 1,
            border: 'none',
            background: '#E8E8E8',
          },
        },
        '&$focusVisible $thumb': {
          // color: '#0f2e14',
          // border: '1px solid #fff',
        },
      },
      '& .thumb': {
        width: '1.25rem',

        borderRadius: '2px',
        boxShadow: 'none',
      },
      '& .track': {
        background: '#E8E8E8',
        borderRadius: '2px',
        // border: `1px solid ${theme.palette.grey[400]}`,
        // backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
      },
      '& .checked': {
      },
      '& .focusVisible': {
      },
    },
    desktop: {
      height: '1.75rem',
      '& .thumb': {
        height: '1.375rem',
      },

    },
    mobile: {
      height: '1.5rem',
      '& .thumb': {
        height: '1.125rem',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
