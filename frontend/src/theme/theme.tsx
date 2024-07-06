import {createTheme, responsiveFontSizes} from "@mui/material";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    primaryAppBar?: {
      height?: number;
    };
  }
  interface Theme {
    primaryAppBar?: {
      height?: number;
    };
  }
}

export const createMuiTheme = () => {
  let theme = createTheme({
    primaryAppBar: {
      height: 50,
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          color: "default",
          elevation: 0,
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};
