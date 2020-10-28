import * as R from 'ramda';
import { createMuiTheme } from '@material-ui/core/styles';

/** Common themes that don't change across light and dark theme */
export const common = {
  breakpoints: {

    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'mobile', 'tablet', 'desktop', 'maxWidth'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 0,
      tablet: 769,
      desktop: 1080,
      maxWidth: 1100,
    },
  },
  typography: {
    paragraph: {
      fontSize: '0.875rem', // 14px
    },
  },
  palette: {
    custom: {
      white: 'rgba(255, 255, 255, 1)',
    },
  },
};

/** Custom theme overrides for light mode */
const lightThemeOverride = {
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(253, 59, 76, 1)',
    },
    secondary: {
      main: 'rgba(30, 196, 144, 1)',
    },
    divider: 'rgba(232, 232, 232, 1)',
    background: {
      default: 'rgba(248, 248, 248, 1)',
      paper: 'rgba(255, 255, 255, 1)',
      footer: 'rgba(0, 0, 0, 1)',
    },
    custom: {
      icon: 'rgba(153, 153, 153, 1)',
      fonts: {
        fontOne: 'rgba(0, 0, 0, 1)', // header
        fontTwo: 'rgba(65, 65, 65, 1)', // body and paragraph
        fontThree: 'rgba(119, 119, 119, 1)', // subfonts
        fontFour: 'rgba(153, 153, 153, 1)', // placeholders
        fontFive: 'rgba(29, 134, 255, 1)', // names and address (links)
      },
      dashboardData: {
        dashOne: 'rgba(250, 58, 57, 1)',
        dashTwo: 'rgba(253, 94, 31, 1)',
        dashThree: 'rgba(253, 93, 78, 1)',
        dashFour: 'rgba(253, 149, 38, 1)',
      },
      transactionType: {
        delegate: 'rgba(30, 196, 144, 1)', // delegate, edt, account
        redelegate: 'rgba(253, 59, 76, 1)', // redelegate, unjail
        undelegate: 'rgba(255, 177, 0, 1)', // undelegate
        withdraw: 'rgba(82, 126, 255, 1)', // withdraw
        deposit: 'rgba(253, 117, 34, 1)', // deposit, proposal
        send: 'rgba(157, 44, 252, 1)', // send, multisend
      },
      gutters: {
        large: '24px',
        medium: '16px',
        small: '8px',
      },
      margins: {
        large: '24px',
        medium: '16px',
        small: '16px',
      },
    },
  },
};

/** Custom theme overrides for dark mode */
const darkThemeOverride = {
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(253, 59, 76, 0.7)',
    },
    secondary: {
      main: 'rgba(30, 196, 144, 0.7)',
    },
    divider: 'rgba(61, 61, 67, 1)',
    background: {
      default: 'rgba(10, 10, 10, 1)',
      paper: 'rgba(19, 19, 22, 1)',
      footer: 'rgba(19, 19, 22, 1)',
    },
    custom: {
      icon: 'rgba(153, 153, 153, 1)',
      fonts: {
        fontOne: 'rgba(230, 230, 230, 1)', // header
        fontTwo: 'rgba(170, 170, 171, 1)', // body and paragraph
        fontThree: 'rgba(129, 129, 129, 1)', // subfonts
        fontFour: 'rgba(153, 153, 153, 1) ', // placeholders
        fontFive: 'rgba(39, 140, 255, 1)', // names and address (links)
      },
      dashboardData: {
        dashOne: 'rgba(250, 58, 57, 0.7)',
        dashTwo: 'rgba(253, 94, 31, 0.7)',
        dashThree: 'rgba(253, 93, 78, 0.7)',
        dashFour: 'rgba(253, 149, 38, 0.7)',
      },
      transactionType: {
        delegate: 'rgba(30, 196, 144, 0.7)', // delegate, edt, account
        redelegate: 'rgba(253, 59, 76, 0.7)', // redelegate, unjail
        undelegate: 'rgba(255, 177, 0, 0.7)', // undelegate
        withdraw: 'rgba(82, 126, 255, 0.7)', // withdraw
        deposit: 'rgba(253, 117, 34, 0.7)', // deposit, proposal
        send: 'rgba(157, 44, 252, 0.7)', // send, multisend
      },
      gutters: {
        large: '24px',
        medium: '16px',
        small: '8px',
      },
      margins: {
        large: '24px',
        medium: '16px',
        small: '16px',
      },
    },
  },
};

export const lightTheme = createMuiTheme(R.mergeDeepLeft(lightThemeOverride, common));
export const darkTheme = createMuiTheme(R.mergeDeepLeft(darkThemeOverride, common));
