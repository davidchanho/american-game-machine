import breakpoints from "./breakpoints";
import { blue, neutral } from "./colors";
import { primaryFont } from "./typography";

const theme = {
  ...breakpoints,
  primaryFont: primaryFont,
};

export const defaultTheme = {
  ...theme,
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
};

export const darkTheme = {
  ...theme,
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
};