import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      background: theme?.palette?.background?.paper,
      height: '100%',
      '&.validator-blocks': {
        display: 'flex',
        flexDirection: 'column',
        '& .validator-blocks__bar-chart': {
          // height: '400px',
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
            // height: '550px',
          },
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
          '& .validator-blocks__title': {
            size: '1.5rem',
          },
          '& .validator-blocks__bar-chart': {
            // height: '600px',
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
