import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      background: theme?.palette?.background?.paper,
      '&.validator-blocks': {
        '& .validator-blocks__bar-chart': {
          minHeight: '400px',
          height: '70vh',
          overflowY: 'auto',
          overflowX: 'hidden',
        },
        '& .validator-blocks__title': {
          color: theme?.palette?.custom?.fonts?.fontOne,
        },
        '& .validator-blocks__description': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
        },
        '& .tool-tip': {
          background: theme?.palette?.background?.paperLowOpacity,
          '& p': {
            color: theme?.palette?.custom?.fonts?.fontTwo,
          },
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
          '& .validator-blocks__bar-chart': {
            minHeight: '600px',
          },
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
          height: '100%',
          '& .validator-blocks__title': {
            size: '1.5rem',
          },
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
