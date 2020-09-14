import * as R from 'ramda';

/** Common themes that don't change across light and dark theme */
export const common = {
  palette: {
    primary: {
      main: 'rgba(253, 59, 76, 1)',
    },
    secondary: {
      main: 'rgba(58, 211, 158, 1)',
    },
  },
};

/** Custom theme overrides for light mode */
const lightThemeOverride = {
  type: 'light',
  palette: {
    homeGridOne: {
      main: 'rgba(250, 58, 57, 1)',
    },
    homeGridTwo: {
      main: 'rgba(253, 94, 31, 1)',
    },
    homeGridThree: {
      main: 'rgba(253, 93, 78, 1)',
    },
    homeGridFour: {
      main: 'rgba(253, 149, 38, 1)',
    },
  },
};

/** Custom theme overrides for dark mode */
const darkThemeOverride = {
  type: 'dark',
  palette: {
    homeGridOne: {
      main: 'rgba(250, 58, 57, 0.7)',
    },
    homeGridTwo: {
      main: 'rgba(253, 94, 31, 0.7)',
    },
    homeGridThree: {
      main: 'rgba(253, 93, 78, 0.7)',
    },
    homeGridFour: {
      main: 'rgba(253, 149, 38, 0.7)',
    },
  },
};

export const lightTheme = R.mergeDeepLeft(lightThemeOverride, common);
export const darkTheme = R.mergeDeepLeft(darkThemeOverride, common);
