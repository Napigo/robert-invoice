import { Invoice } from "@/types";
import { faker } from "@faker-js/faker";

export const generateMockInvoices = (
  count: number = 20,
  productCount: number = 10
): Invoice[] => {
  const list: Invoice[] = Array(count)
    .fill(0)
    .map(() => {
      return {
        invoiceNo: faker.datatype.uuid().slice(10),
        customerName: faker.name.fullName(),
        contactNo: faker.phone.number(),
        email: faker.internet.email(),
        grandTotal: faker.finance.account(4),
        datePurchased: faker.date.past().toDateString(),
        products: Array(productCount)
          .fill(0)
          .map(() => ({
            SKU: faker.random.numeric().toString(),
            unitPrice: faker.finance.amount().toString(),
            description: faker.lorem.sentences(),
            quantity: getRandomNumber(1, 5).toString(),
            serialNumbers: Array(getRandomNumber(1, 5)).map(() =>
              faker.random.alphaNumeric()
            ),
          })),
      };
    });

  return list;
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
