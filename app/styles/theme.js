import { createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: colors.lightGreen,
      dark: colors.darkGreen,
      light: colors.paleGreen,
    },
    secondary: {
      main: colors.yellow,
      dark: colors.dirtyYellow,
      light: colors.lightYellow,
    },
  },
});
