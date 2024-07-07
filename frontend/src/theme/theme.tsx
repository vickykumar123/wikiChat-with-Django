import {createTheme, responsiveFontSizes} from "@mui/material";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    primaryAppBar?: {
      height?: number;
    };
    primaryDraw?: {
      width?: number;
      closed?: number;
    };
    secondaryDraw?: {
      width?: number;
      closed?: number;
    };
  }
  interface Theme {
    primaryAppBar?: {
      height?: number;
    };
    primaryDraw?: {
      width?: number;
      closed?: number;
    };
    secondaryDraw?: {
      width?: number;
      closed?: number;
    };
  }
}

export const createMuiTheme = () => {
  let theme = createTheme({
    primaryAppBar: {
      height: 50,
    },
    primaryDraw: {
      width: 240,
      closed: 70,
    },
    secondaryDraw: {
      width: 240,
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
