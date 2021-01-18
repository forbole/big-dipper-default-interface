import * as R from 'ramda';
import { createMuiTheme } from '@material-ui/core/styles';

/** Common themes that don't change across light and dark theme */
export const common = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'mobile', 'tablet', 'desktop'],
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
    fontFamily: [
      'Open Sans',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      'Arial',
    ].join(','),
    fontSize: 16,
    paragraph: {
      fontSize: '0.875rem', // 14px
    },
  },
  palette: {
    custom: {
      white: 'rgba(255, 255, 255, 1)',
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
      transactionType: {
        bank: 'rgba(159, 70, 236, 1)',
        crisis: 'rgba(47, 168, 206, 1)',
        distribution: 'rgba(47, 168, 206, 1)',
        gov: 'rgba(255, 117, 73, 1)',
        slashing: 'rgba(235, 58, 164, 1)',
        staking: 'rgba(30, 196, 144, 1)',
        redelegate: 'rgba(255, 150, 27, 1)', // exception to the staking category
        undelegate: 'rgba(252, 106, 138, 1)', // exception to the staking category
      },
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
      paperLowOpacity: 'rgba(255, 255, 255, 0.75)',
      footer: 'rgba(0, 0, 0, 1)',
    },
    custom: {
      icon: 'rgba(153, 153, 153, 1)',
      highlight: 'rgba(253, 59, 76, 0.1)', // primary highlight
      table: {
        rowOdd: 'rgba(248, 248, 248, 1)', // tables with striped rows
      },
      fonts: {
        fontOne: 'rgba(0, 0, 0, 1)', // header
        fontTwo: 'rgba(65, 65, 65, 1)', // body and paragraph
        fontThree: 'rgba(119, 119, 119, 1)', // subfonts
        fontFour: 'rgba(153, 153, 153, 1)', // placeholders
        fontFive: 'rgba(29, 134, 255, 1)', // names and address (links)
        fontOneToTwo: 'rgba(0, 0, 0, 1)', // fonts the switch from fontOne in light mode to fontTwo in dark mode
      },
      dashboardData: {
        dashOne: 'rgba(250, 58, 57, 1)',
        dashTwo: 'rgba(253, 94, 31, 1)',
        dashThree: 'rgba(253, 93, 78, 1)',
        dashFour: 'rgba(253, 149, 38, 1)',
      },
      network: {
        mainnet: 'rgba(253, 59, 76, 1)', // primary light theme color
        testnet: 'rgba(253, 120, 70, 1)',
        retired: 'rgba(251, 211, 66, 1)',
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
      paperLowOpacity: 'rgba(19, 19, 22, 0.75)',
      footer: 'rgba(19, 19, 22, 1)',
    },
    custom: {
      icon: 'rgba(153, 153, 153, 1)',
      highlight: 'rgba(37, 37, 43, 1)', // primary highlight
      table: {
        rowOdd: 'rgba(25, 25, 29, 1)',
      },
      fonts: {
        fontOne: 'rgba(230, 230, 230, 1)', // header
        fontTwo: 'rgba(170, 170, 171, 1)', // body and paragraph
        fontThree: 'rgba(129, 129, 129, 1)', // subfonts
        fontFour: 'rgba(153, 153, 153, 1) ', // placeholders
        fontFive: 'rgba(39, 140, 255, 1)', // names and address (links)
        fontOneToTwo: 'rgba(170, 170, 171, 1)', // fonts the switch from fontOne in light mode to fontTwo in dark mode
      },
      dashboardData: {
        dashOne: 'rgba(250, 58, 57, 0.7)',
        dashTwo: 'rgba(253, 94, 31, 0.7)',
        dashThree: 'rgba(253, 93, 78, 0.7)',
        dashFour: 'rgba(253, 149, 38, 0.7)',
      },
      network: {
        mainnet: 'rgba(253, 59, 76, 0.7)', // primary dark theme color
        testnet: 'rgba(253, 120, 70, 0.7)',
        retired: 'rgba(251, 211, 66, 0.7)',
      },
    },
  },
};

export const lightTheme = createMuiTheme(R.mergeDeepLeft(lightThemeOverride, common));
export const darkTheme = createMuiTheme(R.mergeDeepLeft(darkThemeOverride, common));
