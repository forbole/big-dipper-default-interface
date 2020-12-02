import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    tablePreviewWrapper: {
      '&.table-preview-wrapper': {
        '& .content': {
          flex: '1',
          overflow: 'auto',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
