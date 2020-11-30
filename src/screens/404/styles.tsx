import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      height: '100vh',
      background: 'blue',
      backgroundImage: `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.9)
      ),
      url("/images/404-background.jpeg")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      '& img': {
        width: '100%',
        maxWidth: '400px',
      },
      '& .content': {
        textAlign: 'center',
        color: 'white',
        padding: '1rem',
        '& h3': {
          fontSize: '1.875rem',
          fontWeight: 500,
          margin: 0,
        },
        '& p': {
          marginTop: '0.5rem',
        },
        '& .redirect': {
          fontSize: '0.875rem',
          '& .hover': {
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
