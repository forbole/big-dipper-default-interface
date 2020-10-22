import { ReactElement } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
export interface GridProps {
    /**
     * Breakpoint between mobile and desktop component
     */
    GridTheme?: typeof createMuiTheme;
    girdContent?: ReactElement[];
    girdContentText?: ReactElement[];
}
