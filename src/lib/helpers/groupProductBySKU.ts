import { Product } from "@/types";

export function groupProductsBySKU(
  products: Product[]
): Record<string, Product[]> {
  return products.reduce((result, product) => {
    const sku = product.SKU;
    if (!result[sku]) {
      result[sku] = [];
    }
    result[sku].push(product);
    return result;
  }, {} as Record<string, Product[]>);
}
