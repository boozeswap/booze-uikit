import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#293c2e",
  primaryBright: "#74b192",
  primaryDark: "#74b192",
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
  textSubtle: "#887958",
  borderColor: "#E9EAEB",
  card: "#887958",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#3e3718",
  background: "#80a1d8ad",
  backgroundDisabled: "#b7b7b7",
  contrast: "#FFFFFF",
  invertedContrast: "#b7af9c",
  input: "#b7af9c",
  primaryDark: "##0d0e0e",
  tertiary: "#80a1d86b",
  text: "#352a13",
  textDisabled: "#666171",
  textSubtle: "#5d5750",
  borderColor: "#847a35",
  card: "#bacbe8ad",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

