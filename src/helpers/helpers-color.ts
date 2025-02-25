import { Candle } from "../types";

export const Colors = {
  BLACK: "#000000",
  WHITE: "#ffffff",
  GRAY_DARK: "#121212",
  GRAY_DARK_1: "#292929",
  GRAY_DARK_2: "#333",
  GRAY: "#494949",
  GRAY_LIGHT: "#cccccc",
  GRAY_LIGHT_1: "#6e6e6e",
  GREEN: "#26ff8a",
  GREEN_DARK: "#246340", // Same as GREEN_TRANSPARENT given a background of #1f1f1f
  GREEN_TRANSPARENT: "rgba(38, 255, 138, 0.3)",
  RED: "#ff2641",
  RED_TRANSPARENT: "rgba(255, 38, 65, 0.3)",
  TRANSPARENT: "rgba(0,0,0,0)",
  VEGA_RED: "#ff261a",
  VEGA_ORANGE: "#d9822b",
  VEGA_GREEN: "#26ff8a",
  VEGA_YELLOW: "#daff0d",
  BACKGROUND: "#000000",
};

export function colorByChange(a: number, b: number) {
  let color = Colors.WHITE;

  if (a < b) {
    color = Colors.GREEN;
  }

  if (a > b) {
    color = Colors.RED;
  }

  return color;
}

export function colorByMarketMovement(bullish: boolean | null) {
  if (bullish === true) {
    return Colors.GREEN;
  }

  if (bullish === false) {
    return Colors.RED;
  }

  return Colors.WHITE;
}

export const isUp = (d: Candle) => {
  return d.close > d.open;
};

export const redIfDownGreenIfUp = (d: Candle) => {
  return isUp(d) ? Colors.GREEN : Colors.RED;
};

export const candleFill = (d: Candle) => {
  return isUp(d) ? Colors.GREEN_DARK : Colors.RED;
};

export const candleStroke = (d: Candle) => {
  return redIfDownGreenIfUp(d);
};
