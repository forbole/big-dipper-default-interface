import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    const headerColor = theme?.palette?.type === 'light' ? theme?.palette?.custom?.fonts?.fontOne : theme?.palette?.custom?.fonts?.fontTwo;
    return (
      createStyles({
        root: {
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            '& .select-tabs': {
              background: theme?.palette?.background?.paper,
              '& .selected-title': {
                fontSize: '1.5rem',
                color: headerColor,
              },
            },
          },
        },
      })
    );
  });

  return {
    classes: useStyles(),
  };
};
