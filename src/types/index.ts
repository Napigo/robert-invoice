export interface Session {
  jwtToken: string;
  displayName: string;
}

export interface Product {
  SKU: string;
  unitPrice: string;
  description: string;
  quantity: string;
  serialNumbers: string[];
}

export interface Invoice {
  InvoiceNo: string;
  CustomerName: string;
  ContactNo: string;
  Email: string;
  GrandTotalPrice: string;
  DatePurchased: string;
}
