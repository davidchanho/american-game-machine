import { breakpoints } from "./breakpoints";

import { primaryFont } from "./typography";

const theme = {
  ...breakpoints,
  primaryFont: primaryFont,
};

export const defaultTheme = {
  ...theme,

};

export const darkTheme = {
  ...theme,

};
