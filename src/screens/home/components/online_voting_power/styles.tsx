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
          '& .custom-tool-tip': {
            background: theme?.palette?.background?.paperLowOpacity,
            '& p': {
              color: theme?.palette?.custom?.fonts?.fontTwo,
            },
          },
          '& .select-tabs': {
            background: theme?.palette?.background?.paper,
            '& .selected-title': {
              color: headerColor,
            },
          },
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            '& .select-tabs': {
              '& .selected-title': {
                fontSize: '1.5rem',
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
