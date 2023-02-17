import { Invoice } from "@/types";
import { faker } from "@faker-js/faker";

export const generateMockInvoices = (count = 20): Invoice[] => {
  const list: Invoice[] = Array(count)
    .fill(0)
    .map(() => {
      return {
        InvoiceNo: faker.datatype.uuid().slice(10),
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
