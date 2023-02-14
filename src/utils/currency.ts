import currency from "currency.js";

/**
 *
 * @param amount
 * @returns
 */
export const displayCurrency = (amount: number | string) => {
  return currency(amount, { precision: 2, symbol: "$" }).format();
};
