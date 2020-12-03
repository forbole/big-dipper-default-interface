import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

/**
 * consistent styling for TablePreviewWrapper
 */
export const useTablePreviewWrapperStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.table-preview-wrapper': {
        background: theme?.palette?.background?.paper,
      },
      '& .top-bar': {
        '& h3': {
          color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        '&.table-preview-wrapper': {
          '& .top-bar': {
            '& h3': {
              fontSize: '1.5rem',
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
