export interface PaypalResponse {
  code: number;
  ok: boolean;
  data: PaypalResponseData;
}

export interface PaypalResponseData {
  id: string;
  status: string;
  payment_source: PaymentSource;
  purchase_units: PurchaseUnit[];
  payer: Payer;
  links: Link2[];
}

interface PaymentSource {
  paypal: Paypal;
}

interface Paypal {
  email_address: string;
  account_id: string;
  account_status: string;
  name: Name;
  address: Address;
}

interface Name {
  given_name: string;
  surname: string;
}

interface Address {
  country_code: string;
}

interface PurchaseUnit {
  reference_id: string;
  shipping: Shipping;
  payments: Payments;
}

interface Shipping {
  name: Name2;
  address: Address2;
}

interface Name2 {
  full_name: string;
}

interface Address2 {
  address_line_1: string;
  address_line_2: string;
  admin_area_2: string;
  admin_area_1: string;
  postal_code: string;
  country_code: string;
}

interface Payments {
  captures: Capture[];
}

interface Capture {
  id: string;
  status: string;
  amount: Amount;
  final_capture: boolean;
  seller_protection: SellerProtection;
  seller_receivable_breakdown: SellerReceivableBreakdown;
  links: Link[];
  create_time: string;
  update_time: string;
}

interface Amount {
  currency_code: string;
  value: string;
}

interface SellerProtection {
  status: string;
}

interface SellerReceivableBreakdown {
  gross_amount: GrossAmount;
  paypal_fee: PaypalFee;
  net_amount: NetAmount;
}

interface GrossAmount {
  currency_code: string;
  value: string;
}

interface PaypalFee {
  currency_code: string;
  value: string;
}

interface NetAmount {
  currency_code: string;
  value: string;
}

interface Link {
  href: string;
  rel: string;
  method: string;
}

interface Payer {
  name: Name3;
  email_address: string;
  payer_id: string;
  address: Address3;
}

interface Name3 {
  given_name: string;
  surname: string;
}

interface Address3 {
  country_code: string;
}

interface Link2 {
  href: string;
  rel: string;
  method: string;
}
