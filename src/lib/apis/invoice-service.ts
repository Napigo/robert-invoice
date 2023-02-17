import { InvoiceFilter } from "@/redux/invoice-filter-store";
import { Invoice } from "@/types";
import { generateMockInvoices } from "../mocks/invoice.mocks";

const DELAY = 2000;

export interface HTTPResponse<T> {
  code: number;
  status: string;
  data: T;
}

export interface InvoiceResp {
  results: Invoice[];
  total_counts: number;
  page: number;
}

/**
 * @MOCKUP
 */
export const fetchInvoices = async (
  page: number,
  _: InvoiceFilter | null
): Promise<HTTPResponse<InvoiceResp>> => {
  return new Promise((resolve, _) => {
    const rawData = generateMockInvoices(20, 10);
    setTimeout(() => {
      resolve({
        code: 200,
        status: "SUCCESS",
        data: {
          total_counts: 1000,
          page,
          results: rawData,
        },
      });
    }, DELAY);
  });
};
