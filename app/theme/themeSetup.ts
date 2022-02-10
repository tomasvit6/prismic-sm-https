import { ThemeOptions } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

export const customMuiTheme = (): Theme => {
  const theme = setup();

  return createTheme(theme);
};

export const setup = (): ThemeOptions => {
  const defaultPalette = {
    primary: {
      light: '#5cf7ce',
      main: '#32b391',
      dark: '#117359',
    },
    secondary: {
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036',
    },
    light: {
      main: '#FFFFFF',
      dark: '#dedede',
    },
    dark: {
      main: '#000000',
    },
    success: {
      light: '#8df960',
      main: '#0FC246',
      dark: '#469d01',
    },
    info: {
      light: '#7fdce8',
      main: '#41c2fd',
    },
    error: {
      light: '#ff6953',
      main: '#f44336',
      dark: '#e50601',
    },
    text: {
      primary: '#3a3a3c',
      secondary: '#3a3a3c',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  };

  const defaultTypography = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  };

  const defaultComponents: ThemeOptions['components'] = {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
        },
        'h2, h3, h4, h5, h6': {
          fontWeight: defaultTypography.fontWeightRegular,
          margin: 0,
          padding: 0,
          color: 'inherit',
        },
        h1: {
          fontSize: 52,
          fontWeight: defaultTypography.fontWeightMedium,
          margin: 0,
          padding: 0,
          color: 'inherit',
        },
        h2: {
          fontSize: 44,
        },
        h3: {
          fontSize: 36,
        },
        h4: {
          fontSize: 30,
        },
        h5: {
          fontSize: 26,
        },
        h6: {
          fontSize: 22,
        },
        body: {
          height: '100%',
          overflow: 'hidden',
        },
        '#__next': {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
        /** React-toastify default background overrides */
        '.Toastify__toast--success': {
          background: `${defaultPalette.success.main} !important`,
        },
        '.Toastify__toast--error': {
          background: `${defaultPalette.error.main} !important`,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          color: defaultPalette.primary.main,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingBottom: 20,

          '&:last-child': {
            paddingBottom: 20,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: defaultPalette.light.main,
        },
      },
    },
  };

  const theme: ThemeOptions = {
    palette: defaultPalette,
    typography: defaultTypography,
    components: defaultComponents,
  };

  return theme;
};
