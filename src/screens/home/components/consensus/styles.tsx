import {
  makeStyles, createStyles,
} from '@material-ui/styles';

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
            '& .icon': {
              width: '1.5rem',
              height: '1.5rem',
              marginRight: '0.3rem',
              borderRadius: '999em',
            },
          },
        },
      }));
  });
  return {
    classes: useStyles(),
  };
};
