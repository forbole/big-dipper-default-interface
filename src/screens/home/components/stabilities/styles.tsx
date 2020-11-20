import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { args } from './index';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      background: theme?.palette?.background?.paper,
      borderRadius: '2px',
      '& h1': {
        color: theme?.palette?.type === 'light' ? theme?.palette?.custom?.fonts?.fontOne : theme?.palette?.custom?.fonts?.fontTwo,
      },
      '& .itemTitle': {
        color: theme?.palette?.custom?.fonts?.fontThree,
      },
      '& .amount': {
        color: theme?.palette?.type === 'light' ? theme?.palette?.custom?.fonts?.fontOne : theme?.palette?.custom?.fonts?.fontTwo,
      },
      '& .amountInChart': {
        fill: theme?.palette?.type === 'light' ? theme?.palette?.custom?.fonts?.fontOne : theme?.palette?.custom?.fonts?.fontTwo,
      },
      '& .inChart': {
        fill: theme?.palette?.type === 'light' ? theme?.palette?.custom?.fonts?.fontOne : theme?.palette?.custom?.fonts?.fontTwo,
      },
      '& .line': {
        background: args.colors[0],
        length: '5rem',
      },
      '& .bonded': {
        background: args.colors[0],
      },
      '& .unbonded': {
        background: args.colors[1],
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
