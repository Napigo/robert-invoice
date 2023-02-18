export interface Session {
  jwtToken: string;
  displayName: string;
}

export interface Product {
  SKU: string;
  Name: string;
  UnitPrice: string;
  Description: string;
  Quantity: string;
  SerialNumbers: string[];
}

export interface Invoice {
  InvoiceNo: string;
  CustomerName: string;
  ContactNo: string;
  Email: string;
  GrandTotalPrice: string;
  DatePurchased: string;
}

export interface InvoiceDetail extends Invoice {
  Products: Product[];
}
