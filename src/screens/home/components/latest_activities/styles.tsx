import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    tablePreviewWrapper: {
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '&.table-preview-wrapper': {
          height: '0',
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          '& .top-bar': {
            paddingBottom: '2rem',
          },
          '& .content': {
            flex: '1',
            overflow: 'auto',
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
