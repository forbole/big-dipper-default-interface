import {
  makeStyles, createStyles,
} from '@material-ui/styles';
// import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      fill: theme?.palette?.custom?.fonts?.fontFour,
      '&.big-dipper': {
        // '& .content': {
        //   display: 'none',
        // },
        // [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        //   '& .content': {
        //     display: 'block',
        //   },
        //   '& .layout': {
        //     display: 'flex',
        //   },
        //   '& .proposerText': {
        //     display: 'flex',
        //   },
        //   '& .proposal': {
        //     flexDirection: 'row',
        //     fontSize: '1rem',
        //   },
        //   '& .title': {
        //     fontSize: '1.25rem',
        //   },
        //   '& .id': {
        //     paddingRight: '1.5rem',
        //   },
        // },

      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
