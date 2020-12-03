import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { colors } from './index';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    const colorTheme: string = theme?.palette?.type === 'light' ? theme?.palette?.custom?.fonts?.fontOne : theme?.palette?.custom?.fonts?.fontTwo;
    return (
      createStyles({
        root: {
          background: theme?.palette?.background?.paper,
          borderRadius: '2px',
          '&.big-dipper': {
            '& h1': {
              color: colorTheme,
            },
            '& .itemTitle': {
              color: theme?.palette?.custom?.fonts?.fontThree,
            },
            '& .amount': {
              color: colorTheme,
            },
            '& .amountInChart': {
              fill: theme?.palette?.type === 'light' ? theme?.palette?.custom?.fonts?.fontOne : theme?.palette?.custom?.fonts?.fontTwo,
            },
            '& .inChart': {
              fill: colorTheme,
            },
            '& .line': {
              background: theme?.palette?.type === 'light' ? '#E8E8E8' : '#3D3D43',
            },
            '& .bonded': {
              background: colors[0],
            },
            '& .unbonded': {
              background: colors[1],
            },
            '& .chartBox': {
              width: '45%',
            },
          },
        },
      }));
  });
  return {
    classes: useStyles(),
  };
};
