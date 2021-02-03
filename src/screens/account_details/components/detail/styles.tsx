import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = (props: string[]) => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.userInfo': {
        background: theme?.palette?.background?.paper,
        padding: theme?.palette?.custom?.margins?.small,
        '& hr': {
          background: theme?.palette?.divider,
        },
        '& .image': {
          marginTop: '5px',
        },
        '& .addressDisplay': {
          color: theme?.palette?.custom?.fonts.fontTwo,
          wordBreak: 'break-all',
          '& .copy-icon': {
            color: theme?.palette?.custom?.fonts.fontTwo,
          },
        },
        '& .rewardAddress': {
          '& .question-icon': {
            color: theme?.palette?.custom?.fonts.fontTwo,
            fontSize: '1rem',
          },
        },
      },
      // chart
      '& .userInfoChart': {
        '& h3, & h1': {
          color: theme?.palette?.custom?.fonts.fontOne,
        },
        '& h2, & h4': {
          color: theme?.palette?.custom?.fonts.fontTwo,
        },
        '& .dataName': {
          color: theme?.palette?.custom?.fonts.fontTwo,
        },
        '& .dataAmount': {
          color: theme?.palette?.custom?.fonts.fontOne,
        },
        '& .dataPercentage': {
          color: theme?.palette?.custom?.fonts.fontTwo,
        },
        '& .dataType': {
          '&.available': {
            '&:before': {
              background: theme?.palette?.type === 'light' ? props[0] : `${props[0]}b3`,
            },
          },
          '&.delegate': {
            '&:before': {
              background: props[1],
            },
          },
          '&.unbonding': {
            '&:before': {
              background: theme?.palette?.type === 'light' ? props[2] : `${props[2]}b3`,
            },
          },
          '&.reward': {
            '&:before': {
              background: theme?.palette?.type === 'light' ? props[3] : `${props[3]}b3`,
            },
          },
          '&.commision': {
            '&:before': {
              background: theme?.palette?.type === 'light' ? props[4] : `${props[4]}b3`,
            },
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
