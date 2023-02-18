import { InvoiceFilter } from "@/redux/invoice-filter-store";
import { Invoice, InvoiceDetail } from "@/types";
import {
  generateInvoiceDetail,
  generateMockInvoices,
} from "../mocks/invoice.mocks";

const DELAY = 500;

export interface HTTPResponse<T> {
  data: T;
}

export interface InvoiceResp {
  result: Invoice[];
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
    const rawData = generateMockInvoices(20);
    setTimeout(() => {
      resolve({
        data: {
          total_counts: 1000,
          page,
          result: rawData,
        },
      });
    }, DELAY);
  });
};

/**
 *
 * @param invoice_no
 * @returns
 */
export const fetchInvoiceDetail = async (
  invoice_no: string
): Promise<HTTPResponse<InvoiceDetail>> => {
  return new Promise((resolve, _) => {
    const data = generateInvoiceDetail(invoice_no);
    setTimeout(() => {
      resolve({
        data,
      });
    }, DELAY);
  });
};
