import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      fontSize: '1rem',
      margin: '1rem 0',
      '& a': {
        textDecoration: 'none',
        color: 'inherit',
      },
      '& .logo-container': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        '& p': {
          margin: 0,
        },
        '& img': {
          width: '25px',
          marginRight: '0.5rem',
        },
        '& .item': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '1.5rem 0',
          transition: '0.2s',
        },
        '& .networks': {
          width: '100%',
        },
        '& .status': {
          padding: '0.2rem 0.5rem',
          color: 'white',
          fontSize: '0.75rem',
          borderRadius: '3px',
          background: theme?.palette?.custom?.network?.retired,
          '&.retired': {
            background: theme?.palette?.custom?.network?.retired,
          },
          '&.testnet': {
            background: theme?.palette?.custom?.network?.testnet,
          },
          '&.mainnet': {
            background: theme?.palette?.custom?.network?.mainnet,
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
