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
          height: '100%',
          '& .custom-tool-tip': {
            background: theme?.palette?.background?.paperLowOpacity,
            '& p': {
              color: theme?.palette?.custom?.fonts?.fontTwo,
            },
          },
          '& .select-tabs': {
            background: theme?.palette?.background?.paper,
            display: 'flex',
            flexDirection: 'column',
            '& .selected-component-container': {
              flex: 1,
              overflow: 'hidden',
            },
            '& .selected-title': {
              color: headerColor,
            },
            '& .online-voting-power': {
              height: '200px',
            },
            [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
              '& .online-voting-power': {
                height: '300px',
              },
            },
            [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
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
