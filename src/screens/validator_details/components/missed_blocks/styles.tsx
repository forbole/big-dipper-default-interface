import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.validator-blocks': {
        '& .validator-blocks__bar-chart': {
          minHeight: '400px',
          height: '70vh',
          overflowY: 'auto',
          overflowX: 'hidden',
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
          '& .validator-blocks__bar-chart': {
            minHeight: '600px',
          },
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
          '& .validator-blocks__bar-chart': {
            height: '400px',
            minHeight: 'initial',
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
