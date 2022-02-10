import { Theme } from '@mui/material/styles';

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    light: true;
    dark: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    light: true;
    dark: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    light: true;
    dark: true;
  }
}

declare module '@mui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    light: Palette['primary'];
    dark: Palette['primary'];
  }
  interface PaletteOptions {
    light?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
  }
}
