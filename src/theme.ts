// 1. Import `extendTheme`
import {
  BaseThemeTypings,
  BoxProps,
  extendTheme,
  StyleProps,
  ThemeProviderProps,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const appTheme: BoxProps = {
  display: "flex",
  alignItems: "center",
  margin: "auto",
  maxWidth: "1440px",
  flexDirection: "column",
};

const theme = {
  config,
  fonts: {
    body: "Poppins",
    heading: "Poppins, sans-serif",
    mono: "Menlo, monospace",
  },
  breakpoints: {
    //sm: '30em',
    md: '48em',
    //lg: '62em',
    xl: '80em',
    //'2xl': '96em',
  },
  fontSizes: {
    xs: "0.75rem", //12px
    sm: "0.875rem", //14px
    md: "1rem", //16px
    lg: "1.125rem", //18px
    xl: "1.25rem", //20px
    "2xl": "1.5rem", //24px
    "3xl": "1.875rem", //30px
    "4xl": "2.25rem", //36px
    "5xl": "3rem", //48px
    "6xl": "3.75rem", //60px
    "7xl": "4.5rem", //72px
    "8xl": "6rem", //96px
    "9xl": "8rem", //128px
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      300: "#47585B",
    },
    yellow: {
      400: "#FFBA08",
    },
  },
  lineHeights: {
    normal: "normal",
    none: 1, //16px
    shorter: 1.25, //20px
    short: 1.375, //22px
    base: 1.5, //24px
    tall: 1.625, //26px
    taller: "2", //32px
    "3": ".75rem", //12px
    "4": "1rem", //16px
    "5": "1.25rem", //20px
    "6": "1.5rem", //24px
    "7": "1.75rem", //28px
    "8": "2rem", //32px
    "9": "2.25rem", //36px
    "10": "3.375rem", //54px
    "13": "4.375rem", //54px
    "7.5": "1.875rem"
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

// 2. Call `extendTheme` and pass your custom values
export const themeCustomized = extendTheme(theme);
