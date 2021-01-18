import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { rgbaOpacityConverter } from '@utils';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      marginTop: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '& .tag': {
        padding: '0.25rem 0.875rem',
        borderRadius: '4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        background: rgbaOpacityConverter(
          theme?.palette?.custom?.fonts?.fontFour,
          0.3,
        ),
        color: theme?.palette?.custom?.fonts?.fontFour,

        '&.staking': {
          background: rgbaOpacityConverter(
            theme?.palette?.custom?.transactionType?.staking,
            0.3,
          ),
          color: theme?.palette?.custom?.transactionType?.staking,
        },

        '&.redelegate': {
          background: rgbaOpacityConverter(
            theme?.palette?.custom?.transactionType?.redelegate,
            0.3,
          ),
          color: theme?.palette?.custom?.transactionType?.redelegate,
        },

        '&.undelegate': {
          background: rgbaOpacityConverter(
            theme?.palette?.custom?.transactionType?.undelegate,
            0.3,
          ),
          color: theme?.palette?.custom?.transactionType?.undelegate,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        marginTop: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
