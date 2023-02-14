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
  invoiceNo: string;
  customerName: string;
  contactNo: string;
  email: string;
  grandTotal: string;
  datePurchased: string;
  products: Product[];
}
