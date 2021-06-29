import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#031b0a",
  primaryBright: "#29aa69",
  primaryDark: "#29aa69",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#021015",
  input: "#021015",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#012e3ca6",
  borderColor: "#E9EAEB",
  card: "#012e3ca6",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#3e3718",
  background: "#10242b",
  backgroundDisabled: "#333a3e",
  contrast: "#FFFFFF",
  invertedContrast: "#021015",
  input: "#021015",
  primaryDark: "##0d0e0e",
  tertiary: "#021217",
  text: "#352a13",
  textDisabled: "#666171",
  textSubtle: "#5d5750",
  borderColor: "#847a35",
  card: "#8ab3fdad",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

