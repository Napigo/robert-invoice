import { Colors } from "@chakra-ui/react";
import { TinyColor } from "@ctrl/tinycolor";
import { memoizedGet as get } from "@chakra-ui/utils";

/**
 * Replacing the deprecated function from Chakra UI
 * @param theme
 * @param color
 * @param fallback
 * @returns
 */
export const getColor = (theme: any, color: string, fallback?: () => void) => {
  const hex = get(theme, `colors.${color}`, color);
  const { isValid } = new TinyColor(hex);
  return isValid ? hex : fallback?.();
};

/**
 *
 */
export const colors: Colors = {
  brandAlpha: {
    50: "rgba(53, 172, 94, 0.04)",
    100: "rgba(53, 172, 94, 0.06)",
    200: "rgba(53, 172, 94, 0.08)",
    300: "rgba(53, 172, 94, 0.16)",
    400: "rgba(53, 172, 94, 0.24)",
    500: "rgba(53, 172, 94, 0.36)",
    600: "rgba(53, 172, 94, 0.48)",
    700: "rgba(53, 172, 94, 0.64)",
    800: "rgba(53, 172, 94, 0.80)",
    900: "rgba(53, 172, 94, 0.92)",
  },
  brand: {
    50: "#EBF7EF",
    100: "#D7EEDF",
    200: "#AEDEBF",
    300: "#86CD9E",
    400: "#5DBD7E",
    500: "#35AC5E",
    600: "#288147",
    700: "#1B562F",
    800: "#0D2B18",
    900: "#051109",
  },
  //   brand: {
  //     "50": "#E3F9F8",
  //   "100": "#B3F0EF",
  //   "200": "#80E7E5",
  //   "300": "#4DDFDC",
  //   "400": "#1ED7D2",
  //   "500": "#36A2A4",
  //   "600": "#2D8F97",
  //   "700": "#237A7A",
  //   "800": "#1A6464",
  //   "900": "#0F4E4E"
  //   },
  gray: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
  },
};
