import { Invoice, InvoiceDetail } from "@/types";
import { faker } from "@faker-js/faker";

export const generateMockInvoices = (count = 20): Invoice[] => {
  const list: Invoice[] = Array(count)
    .fill(0)
    .map(() => {
      return {
        InvoiceNo: generateInvoiceNumber(),
        CustomerName: faker.name.fullName(),
        ContactNo: faker.phone.number(),
        Email: faker.internet.email(),
        GrandTotalPrice: faker.finance.account(4),
        DatePurchased: faker.date.past().toDateString(),
      };
    });

  return list;
};

/**
 *
 * @param min
 * @param max
 * @returns
 */
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const SKUS = ["1001", "1002", "1003", "1004", "1005"];

/**
 *
 * @param invoiceNo
 * @returns
 */
export const generateInvoiceDetail = (invoiceNo: string): InvoiceDetail => {
  return {
    InvoiceNo: invoiceNo,
    CustomerName: faker.name.fullName(),
    ContactNo: faker.phone.number(),
    Email: faker.internet.email(),
    GrandTotalPrice: faker.finance.amount(500, 1000, 2, "$"),
    DatePurchased: faker.date.past().toString(),
    Products: Array(getRandomNumber(1, 10))
      .fill(0)
      .map(() => {
        const count = getRandomNumber(1, 5);
        return {
          SKU: SKUS[getRandomNumber(0, SKUS.length - 1)],
          Name: faker.commerce.productName(),
          UnitPrice: faker.finance.amount(20, 100, 2, "$"),
          Description: faker.commerce.productDescription(),
          Quantity: count.toString(),
          SerialNumbers: Array(count)
            .fill(0)
            .map(() => generateProductSerialNumber()),
        };
      }),
  };
};

function generateProductSerialNumber(): string {
  const prefix = "SE";
  const suffix = faker.random.alphaNumeric(6);
  const separator = "-";
  const date = faker.date.past(1).toISOString().slice(0, 10).replace(/-/g, "");
  return `${prefix}${separator}${date}${separator}${suffix}`;
}

export function generateSkuNumber(): string {
  const skuNumber = faker.random.alphaNumeric(8);
  return `SKU-${skuNumber}`;
}

export function generateInvoiceNumber(): string {
  const prefix = "INV";
  const suffix = getRandomNumber(10000000, 99999999);
  const separator = "-";
  const date = faker.date.past(1).toISOString().slice(0, 10).replace(/-/g, "");
  return `${prefix}${separator}${date}${separator}${suffix}`;
}
