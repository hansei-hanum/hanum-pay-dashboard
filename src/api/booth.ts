import { API_SUFFIX, instance, setAccessToken } from './api';

export interface GetPaymentDetailValues {
  page: number;
  limit: number;
}

export interface GetPaymentDetailResponse {
  boothInfo: {
    classification: string;
    id: number;
    name: string;
  };
  balanceAmount: number;
  payments: [
    {
      userName: string;
      id: number;
      paidAmount: number;
      refundedAmount: number;
      status: 'paid' | 'refunded';
      paidTime: string;
      refundedTime: string;
    },
  ];
  page: number;
  limit: number;
  totalPage: number;
}

export interface RefundPaymentValue {
  id: number;
}

export const GetPaymentDetail = async ({ page, limit }: GetPaymentDetailValues) => {
  const token = localStorage.getItem('key');
  if (!token) return null;
  setAccessToken(token);
  const { data } = await instance.get(
    `${API_SUFFIX.BOOTH_PAYMENT_DETAIL}?page=${page}&limit=${limit}`,
  );
  return data;
};

export const RefundPayment = async ({ id }: RefundPaymentValue) => {
  const token = localStorage.getItem('key');
  if (!token) return null;
  setAccessToken(token);
  console.log(id);
  const { data } = await instance.post(API_SUFFIX.BOOTH_PAYMENT_REFUND, {
    paymentId: id,
    messgae: null,
  });
  return data;
};
