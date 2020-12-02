import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    const headerColor = theme?.palette?.type === 'light' ? theme?.palette?.custom?.fonts?.fontOne : theme?.palette?.custom?.fonts?.fontTwo;
    return (
      createStyles({
        desktop: {
          display: 'none',
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            display: 'block',
            '&.table-preview-wrapper': {
              background: theme?.palette?.background?.paper,
              height: '0',
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
              '& .top-bar': {
                '& h3': {
                  color: headerColor,
                  fontSize: '1.5rem',
                },
              },

              '& .content': {
                flex: '1',
                overflow: 'auto',
              },
            },
            '& .single-activity': {
              '&:hover': {
                cursor: 'pointer',
              },
            },
            '& .MuiTableCell-root': {
              color: theme?.palette?.custom?.fonts?.fontTwo,
              borderColor: theme?.palette?.divider,
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
