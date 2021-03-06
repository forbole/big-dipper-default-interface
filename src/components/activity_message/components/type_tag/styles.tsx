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
          theme?.palette?.divider,
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

        '&.bank': {
          background: rgbaOpacityConverter(
            theme?.palette?.custom?.transactionType?.bank,
            0.3,
          ),
          color: theme?.palette?.custom?.transactionType?.bank,
        },

        '&.crisis': {
          background: rgbaOpacityConverter(
            theme?.palette?.custom?.transactionType?.crisis,
            0.3,
          ),
          color: theme?.palette?.custom?.transactionType?.crisis,
        },

        '&.slashing': {
          background: rgbaOpacityConverter(
            theme?.palette?.custom?.transactionType?.slashing,
            0.3,
          ),
          color: theme?.palette?.custom?.transactionType?.slashing,
        },

        '&.distribution': {
          background: rgbaOpacityConverter(
            theme?.palette?.custom?.transactionType?.distribution,
            0.3,
          ),
          color: theme?.palette?.custom?.transactionType?.distribution,
        },

        '&.governance': {
          background: rgbaOpacityConverter(
            theme?.palette?.custom?.transactionType?.gov,
            0.3,
          ),
          color: theme?.palette?.custom?.transactionType?.gov,
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
