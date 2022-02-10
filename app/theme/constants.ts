import { amber, grey } from '@mui/material/colors';
import { Theme } from '@mui/system';

import { customMuiTheme } from './themeSetup';

export const SHARED_PALETTE = {
  amber: amber[400],
  darkestGrey: grey[800],
  darkerGrey: grey[700],
  darkGrey: grey[300],
  grey: grey[200],
  lightGrey: grey[100],
  lightestGrey: grey[50],
};

export const TENANT_THEMES: Record<'default', Theme> = {
  default: customMuiTheme(),
};
