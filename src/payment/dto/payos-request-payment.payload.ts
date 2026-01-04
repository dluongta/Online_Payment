export interface PayosRequestPaymentItem {
  name: string;
  quantity: number;
  price: number;
}

export interface PayosRequestPaymentPayload {
  orderCode: number;
  amount: number;
  description: string;
  cancelUrl: string;
  returnUrl: string;
  buyerName?: string;
  buyerEmail?: string;
  buyerPhone?: string;
  buyerAddress?: string;
  items?: PayosRequestPaymentItem[];
  expiredAt?: number;
  signature: string;

}
